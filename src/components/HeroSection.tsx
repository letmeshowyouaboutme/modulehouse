import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden" style={{ minHeight: '92vh' }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(105deg, rgba(28,58,46,0.93) 0%, rgba(28,58,46,0.70) 55%, rgba(28,58,46,0.35) 100%)',
          }}
        />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-27b88e35eabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl animate-fade-in-up">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in-up"
              style={{ color: 'var(--accent)', animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              SERIM ECOTECH — PREMIUM MODULE HOUSE
            </p>

            <h1
              className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.15] text-white mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              자연과 함께하는<br />
              <span style={{ color: 'var(--accent-light)' }}>프리미엄 공간</span>을<br />
              만듭니다
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-in-up"
              style={{ color: 'rgba(255,255,255,0.75)', animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              체류형 쉼터부터 이동식 주택, 목조주택까지.<br />
              세림에코텍은 당신이 꿈꾸는 가장 완벽한 공간을 현실로 만들어 드립니다.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold rounded-sm transition-all duration-300 hover:opacity-90 hover:gap-3"
                style={{ background: 'var(--accent)', color: 'var(--primary)' }}
              >
                무료 견적 상담하기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-24 right-8 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest uppercase rotate-90 mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
          SCROLL
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" style={{ color: 'var(--accent)' }} />
      </div>
    </section>
  );
}
