import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import GallerySection from '@/components/GallerySection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <HeroSection />
      <FeatureSection />
      <GallerySection />

      {/* Products Section */}
      <section className="py-24" style={{ background: 'var(--surface-secondary)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--accent)' }}>
              PRODUCTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
              제품 라인업
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              세림에코텍의 다양한 모듈하우스 제품을 만나보세요.<br />
              각 제품은 최고의 품질과 합리적인 가격으로 제공됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                thumbnail={product.thumbnail}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24" style={{ background: 'var(--primary)' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--accent)' }}>
            FREE CONSULTATION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 무료 상담을 신청하세요
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            전문 건축 컨설턴트가 고객님의 꿈을 현실로 만들어 드립니다.
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-2 px-10 py-4 font-semibold rounded-sm transition-all duration-300 hover:opacity-90 hover:gap-3"
            style={{ background: 'var(--accent)', color: 'var(--primary)' }}
          >
            무료 견적 상담하기
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
