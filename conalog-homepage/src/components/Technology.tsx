export default function Technology() {
  const techStack = [
    {
      step: "01",
      title: "데이터 수집",
      desc: "IoT 센서와 MLPE 장치를 통해 에너지 설비의 실시간 데이터를 수집합니다. 모듈 레벨의 정밀한 데이터 확보가 가능합니다.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "AI 분석",
      desc: "머신러닝 알고리즘이 수집된 데이터를 실시간으로 분석하여 이상 패턴을 탐지하고, 장애를 사전에 예측합니다.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "인사이트 도출",
      desc: "분석 결과를 직관적인 대시보드로 시각화하고, 운영 최적화를 위한 실행 가능한 인사이트를 제공합니다.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "자동 최적화",
      desc: "도출된 인사이트를 기반으로 발전 설비의 운영 파라미터를 자동으로 조정하여 지속적인 성능 개선을 실현합니다.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section id="technology" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Description */}
          <div className="lg:sticky lg:top-28">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
              데이터 기반
              <br />
              에너지 관리 기술
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              커널로그의 기술 플랫폼은 현장의 데이터를 수집하고, AI로 분석하여,
              실행 가능한 인사이트로 변환하는 엔드투엔드 프로세스를 제공합니다.
            </p>
            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {["MLPE", "IoT", "AI/ML", "Cloud", "Edge Computing", "Digital Twin"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-surface text-text-secondary text-sm font-medium border border-border"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right - Steps */}
          <div className="space-y-6">
            {techStack.map((item, idx) => (
              <div
                key={item.step}
                className="group relative p-8 rounded-2xl bg-surface hover:bg-white border border-transparent hover:border-border hover:shadow-lg transition-all duration-300"
              >
                {/* Connector line */}
                {idx < techStack.length - 1 && (
                  <div className="absolute left-12 top-full w-px h-6 bg-border" />
                )}
                <div className="flex gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-accent text-xs font-bold mb-2">
                      STEP {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
