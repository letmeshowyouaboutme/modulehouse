import { Home, Trees, Hammer, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Home,
    number: '01',
    title: '이동식 주택',
    description: '합리적인 비용으로 완성하는 나만의 세컨드 하우스. 설치부터 입주까지 원스톱 서비스를 제공합니다.',
  },
  {
    icon: Trees,
    number: '02',
    title: '체류형 쉼터',
    description: '자연 속에서 즐기는 진정한 휴식. 농막보다 더 편리하고 쾌적한 공간을 제안합니다.',
  },
  {
    icon: Hammer,
    number: '03',
    title: '목조 주택',
    description: '친환경 자재를 사용한 고품격 목조 주택. 뛰어난 단열성과 내구성을 자랑합니다.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: '책임 시공',
    description: '계약부터 시공, 사후관리까지. 전문가가 직접 관리하는 믿을 수 있는 품질을 약속합니다.',
  },
];

export default function FeatureSection() {
  return (
    <section className="py-28" style={{ background: 'var(--surface)' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            WHY SERIM ECOTECH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: 'var(--primary)' }}>
            왜 세림에코텍인가요?
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            단순한 건축을 넘어 삶의 가치를 높이는 공간을 만듭니다.<br />
            오랜 경험과 노하우로 최고의 만족을 드립니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-sm overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'var(--primary)' }}
              />

              {/* Number */}
              <p
                className="relative z-10 text-5xl font-bold mb-6 leading-none transition-colors duration-300"
                style={{ color: 'var(--surface-secondary)' }}
              >
                {feature.number}
              </p>

              {/* Icon */}
              <div
                className="relative z-10 w-12 h-12 rounded-sm flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/10"
                style={{ background: 'var(--surface-secondary)' }}
              >
                <feature.icon
                  className="h-6 w-6 transition-colors duration-300 group-hover:text-white"
                  style={{ color: 'var(--accent)' }}
                />
              </div>

              <h3
                className="relative z-10 text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-white"
                style={{ color: 'var(--primary)' }}
              >
                {feature.title}
              </h3>
              <p
                className="relative z-10 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/75"
                style={{ color: 'var(--text-muted)' }}
              >
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'var(--accent)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
