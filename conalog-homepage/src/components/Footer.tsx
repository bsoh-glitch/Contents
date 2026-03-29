export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/60">
      <div className="container-main px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white text-lg font-bold tracking-tight">
                conalog
              </span>
            </div>
            <p className="text-white/40 leading-relaxed mb-6 max-w-sm">
              에너지 산업의 디지털 전환을 이끄는 기술 솔루션 기업.
              데이터와 기술로 지속가능한 에너지 생태계를 만들어갑니다.
            </p>
            <div className="flex gap-3">
              {/* Social placeholders */}
              {["LinkedIn", "Blog"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors text-xs font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">솔루션</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.solarlog.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Solarlog
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm hover:text-white transition-colors">
                  에너지 데이터 분석
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm hover:text-white transition-colors">
                  스마트 O&M 플랫폼
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">회사</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-sm hover:text-white transition-colors">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#technology" className="text-sm hover:text-white transition-colors">
                  기술
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-white transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Conalog. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
