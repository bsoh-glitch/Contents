#!/usr/bin/env python3
"""
Genspark PPT 폰트 깨짐 수정 스크립트

Genspark에서 다운로드한 PPT 파일의 동아시아(한글) 폰트가 깨지는 문제를 수정합니다.

원인: PPTX 내부 XML에서 <a:latin> (라틴 폰트)만 설정되어 있고,
      <a:ea> (동아시아 폰트)와 <a:cs> (복합 스크립트 폰트)가 누락/잘못 설정됨.
      PowerPoint는 한글 렌더링 시 <a:ea> 태그를 참조하므로 글자가 깨져 보임.

사용법:
    python fix_ppt_fonts.py input.pptx
    python fix_ppt_fonts.py input.pptx -o output.pptx
    python fix_ppt_fonts.py input.pptx --font "맑은 고딕"
    python fix_ppt_fonts.py input.pptx --font "Pretendard" --latin-font "Pretendard"
"""

import argparse
import copy
import sys
from pathlib import Path

from lxml import etree
from pptx import Presentation
from pptx.oxml.ns import qn

# 동아시아(한글) 지원 폰트 목록 (기본 → 대체 순서)
DEFAULT_EA_FONT = "맑은 고딕"
COMMON_EA_FONTS = [
    "맑은 고딕",
    "Malgun Gothic",
    "Pretendard",
    "Noto Sans KR",
    "나눔고딕",
    "NanumGothic",
    "Apple SD Gothic Neo",
    "Microsoft YaHei",
]


def fix_run_fonts(rPr, ea_font, latin_font=None, cs_font=None):
    """run properties(rPr) 요소의 폰트를 수정합니다."""
    if rPr is None:
        return

    cs_font = cs_font or ea_font

    # a:ea (동아시아 폰트) 수정/추가
    ea_elem = rPr.find(qn("a:ea"))
    if ea_elem is None:
        ea_elem = etree.SubElement(rPr, qn("a:ea"))
    ea_elem.set("typeface", ea_font)
    # 기존에 잘못된 charset/pitchFamily 속성 제거
    for attr in ["charset", "pitchFamily", "panose"]:
        if attr in ea_elem.attrib:
            del ea_elem.attrib[attr]

    # a:cs (복합 스크립트 폰트) 수정/추가
    cs_elem = rPr.find(qn("a:cs"))
    if cs_elem is None:
        cs_elem = etree.SubElement(rPr, qn("a:cs"))
    cs_elem.set("typeface", cs_font)

    # a:latin 폰트도 변경 요청한 경우
    if latin_font:
        latin_elem = rPr.find(qn("a:latin"))
        if latin_elem is None:
            latin_elem = etree.SubElement(rPr, qn("a:latin"))
        latin_elem.set("typeface", latin_font)


def fix_shape_fonts(shape, ea_font, latin_font=None, cs_font=None):
    """Shape 내 모든 텍스트의 폰트를 수정합니다."""
    if shape.has_text_frame:
        for paragraph in shape.text_frame.paragraphs:
            # 단락 기본 폰트 수정 (pPr > defRPr)
            pPr = paragraph._p.find(qn("a:pPr"))
            if pPr is not None:
                defRPr = pPr.find(qn("a:defRPr"))
                if defRPr is not None:
                    fix_run_fonts(defRPr, ea_font, latin_font, cs_font)

            # 각 Run의 폰트 수정
            for run in paragraph.runs:
                rPr = run._r.find(qn("a:rPr"))
                if rPr is None:
                    rPr = etree.SubElement(run._r, qn("a:rPr"))
                    # run 요소의 첫 번째 자식으로 이동
                    run._r.insert(0, rPr)
                fix_run_fonts(rPr, ea_font, latin_font, cs_font)

    # 테이블 셀 처리
    if shape.has_table:
        for row in shape.table.rows:
            for cell in row.cells:
                for paragraph in cell.text_frame.paragraphs:
                    pPr = paragraph._p.find(qn("a:pPr"))
                    if pPr is not None:
                        defRPr = pPr.find(qn("a:defRPr"))
                        if defRPr is not None:
                            fix_run_fonts(defRPr, ea_font, latin_font, cs_font)
                    for run in paragraph.runs:
                        rPr = run._r.find(qn("a:rPr"))
                        if rPr is None:
                            rPr = etree.SubElement(run._r, qn("a:rPr"))
                            run._r.insert(0, rPr)
                        fix_run_fonts(rPr, ea_font, latin_font, cs_font)

    # 그룹 Shape 재귀 처리
    if shape.shape_type is not None and hasattr(shape, "shapes"):
        for child_shape in shape.shapes:
            fix_shape_fonts(child_shape, ea_font, latin_font, cs_font)


def fix_theme_fonts(prs, ea_font):
    """테마의 기본 동아시아 폰트를 수정합니다."""
    for slide_master in prs.slide_masters:
        theme = slide_master.element.find(
            ".//{http://schemas.openxmlformats.org/drawingml/2006/main}theme"
        )
        # 테마는 slide_master의 part를 통해 접근
        try:
            theme_part = slide_master.part.related_parts.get(
                slide_master.element.get(
                    qn("r:id")
                )
            )
        except Exception:
            pass

        # slide master XML에서 직접 동아시아 폰트 참조 수정
        xml = slide_master.element
        for rPr_tag in ["a:defRPr", "a:rPr", "a:endParaRPr"]:
            for rPr in xml.iter(qn(rPr_tag)):
                ea_elem = rPr.find(qn("a:ea"))
                if ea_elem is not None:
                    current = ea_elem.get("typeface", "")
                    # 테마 참조(+mj-ea, +mn-ea)는 건드리지 않음
                    if not current.startswith("+"):
                        ea_elem.set("typeface", ea_font)
                cs_elem = rPr.find(qn("a:cs"))
                if cs_elem is not None:
                    current = cs_elem.get("typeface", "")
                    if not current.startswith("+"):
                        cs_elem.set("typeface", ea_font)


def fix_slide_layout_fonts(prs, ea_font):
    """슬라이드 레이아웃의 기본 폰트를 수정합니다."""
    for slide_master in prs.slide_masters:
        for layout in slide_master.slide_layouts:
            xml = layout.element
            for rPr_tag in ["a:defRPr", "a:rPr", "a:endParaRPr"]:
                for rPr in xml.iter(qn(rPr_tag)):
                    ea_elem = rPr.find(qn("a:ea"))
                    if ea_elem is not None:
                        current = ea_elem.get("typeface", "")
                        if not current.startswith("+"):
                            ea_elem.set("typeface", ea_font)


def analyze_fonts(prs):
    """현재 PPTX에서 사용 중인 폰트를 분석합니다."""
    fonts = {"latin": set(), "ea": set(), "cs": set()}

    for slide in prs.slides:
        for shape in slide.shapes:
            if not shape.has_text_frame:
                continue
            for paragraph in shape.text_frame.paragraphs:
                for run in paragraph.runs:
                    rPr = run._r.find(qn("a:rPr"))
                    if rPr is None:
                        continue
                    latin = rPr.find(qn("a:latin"))
                    ea = rPr.find(qn("a:ea"))
                    cs = rPr.find(qn("a:cs"))
                    if latin is not None:
                        fonts["latin"].add(latin.get("typeface", "(없음)"))
                    if ea is not None:
                        fonts["ea"].add(ea.get("typeface", "(없음)"))
                    else:
                        fonts["ea"].add("(미설정)")
                    if cs is not None:
                        fonts["cs"].add(cs.get("typeface", "(없음)"))
                    else:
                        fonts["cs"].add("(미설정)")

    return fonts


def fix_pptx(input_path, output_path=None, ea_font=None, latin_font=None):
    """PPTX 파일의 폰트를 수정합니다."""
    ea_font = ea_font or DEFAULT_EA_FONT

    prs = Presentation(input_path)

    # 수정 전 폰트 분석
    print("=" * 50)
    print("수정 전 폰트 분석:")
    print("=" * 50)
    fonts_before = analyze_fonts(prs)
    print(f"  Latin 폰트: {', '.join(fonts_before['latin']) or '(없음)'}")
    print(f"  EA 폰트:    {', '.join(fonts_before['ea']) or '(없음)'}")
    print(f"  CS 폰트:    {', '.join(fonts_before['cs']) or '(없음)'}")
    print()

    # 슬라이드 내 모든 Shape 수정
    slide_count = 0
    shape_count = 0
    for slide in prs.slides:
        slide_count += 1
        for shape in slide.shapes:
            fix_shape_fonts(shape, ea_font, latin_font)
            shape_count += 1

    # 테마 및 레이아웃 수정
    fix_theme_fonts(prs, ea_font)
    fix_slide_layout_fonts(prs, ea_font)

    # 수정 후 폰트 분석
    print("=" * 50)
    print("수정 후 폰트 분석:")
    print("=" * 50)
    fonts_after = analyze_fonts(prs)
    print(f"  Latin 폰트: {', '.join(fonts_after['latin']) or '(없음)'}")
    print(f"  EA 폰트:    {', '.join(fonts_after['ea']) or '(없음)'}")
    print(f"  CS 폰트:    {', '.join(fonts_after['cs']) or '(없음)'}")
    print()

    # 저장
    if output_path is None:
        p = Path(input_path)
        output_path = str(p.parent / f"{p.stem}_fixed{p.suffix}")

    prs.save(output_path)
    print(f"슬라이드 {slide_count}개, Shape {shape_count}개 처리 완료")
    print(f"저장 완료: {output_path}")
    return output_path


def main():
    parser = argparse.ArgumentParser(
        description="Genspark PPT 폰트 깨짐 수정 스크립트"
    )
    parser.add_argument("input", help="입력 PPTX 파일 경로")
    parser.add_argument("-o", "--output", help="출력 PPTX 파일 경로 (기본: input_fixed.pptx)")
    parser.add_argument(
        "--font",
        default=DEFAULT_EA_FONT,
        help=f"동아시아(한글) 폰트 이름 (기본: {DEFAULT_EA_FONT})",
    )
    parser.add_argument(
        "--latin-font",
        default=None,
        help="라틴 폰트도 함께 변경할 경우 지정",
    )
    parser.add_argument(
        "--analyze-only",
        action="store_true",
        help="폰트 분석만 수행 (수정하지 않음)",
    )

    args = parser.parse_args()

    if not Path(args.input).exists():
        print(f"오류: 파일을 찾을 수 없습니다: {args.input}", file=sys.stderr)
        sys.exit(1)

    if args.analyze_only:
        prs = Presentation(args.input)
        fonts = analyze_fonts(prs)
        print("현재 폰트 분석 결과:")
        print(f"  Latin 폰트: {', '.join(fonts['latin']) or '(없음)'}")
        print(f"  EA 폰트:    {', '.join(fonts['ea']) or '(없음)'}")
        print(f"  CS 폰트:    {', '.join(fonts['cs']) or '(없음)'}")
    else:
        fix_pptx(args.input, args.output, args.font, args.latin_font)


if __name__ == "__main__":
    main()
