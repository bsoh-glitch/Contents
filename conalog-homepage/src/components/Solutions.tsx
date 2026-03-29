export default function Solutions() {
  return (
    <section id="solutions" className="section-padding bg-surface">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
            에너지 산업을 위한
            <br />
            통합 솔루션
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            커널로그가 제공하는 솔루션은 에너지 생산부터 관리, 최적화까지
            전 과정을 아우릅니다.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Solarlog - Main Solution */}
          <div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-light p-10 md:p-14">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent-light text-xs font-semibold mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
                  FLAGSHIP
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Solarlog
                </h3>
                <p className="text-lg text-white/60 mb-3 font-medium">
                  MLPE 기반 태양광 유지관리 솔루션
                </p>
                <p className="text-white/50 leading-relaxed mb-8">
                  모듈 레벨 전력 전자장치(MLPE)를 활용하여 태양광 발전소의
                  실시간 모니터링, 이상 감지, 예측 유지보수를 제공합니다.
                  개별 패널 단위의 정밀한 관리로 발전 효율을 극대화합니다.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["실시간 모니터링", "이상 감지", "예측 유지보수", "발전량 최적화"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <a
                  href="https://www.solarlog.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent-dark transition-colors"
                >
                  자세히 보기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 flex flex-col justify-between">
                  {/* Mock Dashboard */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-white/60 text-sm">시스템 정상 가동 중</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-white/40 text-xs mb-1">금일 발전량</div>
                      <div className="text-white text-xl font-bold">847.2 <span className="text-sm text-white/40">kWh</span></div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-white/40 text-xs mb-1">발전 효율</div>
                      <div className="text-accent-light text-xl font-bold">98.7<span className="text-sm text-white/40">%</span></div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-white/40 text-xs mb-1">모니터링 패널</div>
                      <div className="text-white text-xl font-bold">1,248<span className="text-sm text-white/40">개</span></div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-white/40 text-xs mb-1">이상 감지</div>
                      <div className="text-green-400 text-xl font-bold">0<span className="text-sm text-white/40">건</span></div>
                    </div>
                  </div>
                  {/* Chart mock */}
                  <div className="mt-4 flex items-end gap-1 h-16">
                    {[40, 55, 70, 65, 80, 90, 85, 95, 88, 92, 78, 82].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-accent/30 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Solutions */}
          <div className="group p-8 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              에너지 데이터 분석
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              AI 기반 발전량 예측, 성능 분석, 이상 패턴 탐지 등 데이터 기반 의사결정을 지원하는 분석 솔루션입니다.
            </p>
            <span className="text-accent text-sm font-semibold inline-flex items-center gap-1">
              준비 중
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>

          <div className="group p-8 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">
              스마트 O&M 플랫폼
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              발전소 운영 및 유지보수(O&M)를 위한 통합 관리 플랫폼으로, 작업 일정 관리부터 성과 보고까지 원스톱으로 제공합니다.
            </p>
            <span className="text-accent text-sm font-semibold inline-flex items-center gap-1">
              준비 중
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
