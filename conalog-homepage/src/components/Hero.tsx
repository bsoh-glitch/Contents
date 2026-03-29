export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-light rounded-full blur-3xl" />
      </div>
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container-main px-6 md:px-12 lg:px-24 pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              에너지 기술의 새로운 기준
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            기술로 연결하는
            <br />
            <span className="text-accent-light">에너지의 미래</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            커널로그는 에너지 산업의 디지털 전환을 이끄는 기술 솔루션 기업입니다.
            <br className="hidden md:block" />
            데이터와 기술을 통해 더 효율적이고 지속가능한 에너지 생태계를
            만들어갑니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#solutions"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-white font-semibold text-base hover:bg-accent-dark transition-colors"
            >
              솔루션 살펴보기
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
            >
              회사 소개
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {[
            { value: "10+", label: "산업 파트너" },
            { value: "99.9%", label: "시스템 가동률" },
            { value: "24/7", label: "실시간 모니터링" },
            { value: "30%↑", label: "운영 효율 개선" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-accent-light">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
