import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conalog | 커널로그 - 에너지 기술 솔루션",
  description:
    "커널로그는 에너지 산업의 디지털 전환을 이끄는 기술 솔루션 기업입니다. MLPE 기반 태양광 유지관리, AI 모니터링 등 혁신적인 솔루션을 제공합니다.",
  keywords: "커널로그, Conalog, 태양광, 솔라로그, Solarlog, MLPE, 에너지 솔루션, 디지털 전환",
  openGraph: {
    title: "Conalog | 커널로그 - 에너지 기술 솔루션",
    description: "에너지 산업의 디지털 전환을 이끄는 기술 솔루션 기업",
    url: "https://www.conalog.com",
    siteName: "Conalog",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
