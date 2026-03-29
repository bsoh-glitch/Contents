export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-main">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
            에너지 산업의 핵심을 연결하는
            <br />
            기술 플랫폼, 커널로그
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            커널로그(Conalog)는 &quot;Connect Analog&quot;의 의미로, 아날로그
            에너지 산업을 디지털 기술로 연결합니다. 태양광, 풍력 등 신재생에너지
            분야에서 데이터 기반의 혁신적인 솔루션을 개발하여 에너지 전환 시대를
            선도합니다.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: "기술 혁신",
              desc: "MLPE, AI, IoT 등 최신 기술을 활용하여 에너지 산업의 효율성과 안정성을 극대화하는 솔루션을 개발합니다.",
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "지속가능성",
              desc: "탄소중립과 에너지 전환이라는 글로벌 목표에 부합하는 친환경 기술 솔루션으로 지속가능한 미래를 만들어갑니다.",
            },
            {
              icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "파트너십",
              desc: "발전사업자, 설비제조사, 시공사 등 에너지 산업 전반의 파트너들과 함께 생태계를 구축합니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl bg-surface hover:bg-white border border-transparent hover:border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
