import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '양평 전원주택 25평형',
    category: '목조주택',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: '가평 힐링 쉼터',
    category: '체류형 쉼터',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: '강화도 모던 하우스',
    category: '이동식 주택',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: '용인 타운하우스',
    category: '목조주택',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: '제주도 감성 스테이',
    category: '모듈러 주택',
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: '홍천 숲속의 집',
    category: '체류형 쉼터',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function GallerySection() {
  return (
    <section className="py-28" style={{ background: 'var(--surface-secondary)' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              CASE STUDY
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
              시공사례
            </h2>
            <p className="leading-relaxed max-w-lg" style={{ color: 'var(--text-muted)' }}>
              세림에코텍이 완성한 행복한 공간들을 만나보세요.<br />
              고객님의 꿈을 현실로 만들어 드립니다.
            </p>
          </div>
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
            style={{ color: 'var(--primary)' }}
          >
            전체 프로젝트 보기
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer rounded-sm"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
            >
              {/* Large first card */}
              <div className={`overflow-hidden bg-gray-100 ${i === 0 ? 'aspect-[3/2]' : 'aspect-[4/3]'}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Category badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-sm transition-all duration-300"
                style={{ background: 'var(--accent)', color: 'var(--primary)' }}
              >
                {project.category}
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(28,58,46,0.92) 0%, rgba(28,58,46,0.4) 60%, transparent 100%)' }}
              >
                <h3
                  className="text-white text-xl font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                >
                  {project.title}
                </h3>
                <span
                  className="inline-flex items-center gap-1 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100"
                  style={{ color: 'var(--accent-light)' }}
                >
                  자세히 보기 <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: 'var(--primary)' }}
          >
            전체 프로젝트 보기 <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
