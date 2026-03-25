import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  description: string;
  thumbnail: string;
}

export default function ProductCard({ id, name, price, description, thumbnail }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="block group">
      <div
        className="overflow-hidden rounded-sm transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        }}
      >
        {/* Image */}
        <div className="relative h-60 overflow-hidden bg-gray-100">
          <Image
            src={thumbnail}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transform group-hover:scale-105 transition-transform duration-600"
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            style={{ background: 'rgba(28,58,46,0.35)' }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'var(--accent)' }}
            >
              <ArrowUpRight className="h-5 w-5" style={{ color: 'var(--primary)' }} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3
            className="text-base font-bold mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
            style={{ color: 'var(--primary)' }}
          >
            {name}
          </h3>
          <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold" style={{ color: 'var(--primary)' }}>
              {price}
            </span>
            <span
              className="text-xs font-semibold tracking-wide"
              style={{ color: 'var(--accent)' }}
            >
              상세보기 →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
