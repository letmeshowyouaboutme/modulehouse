import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-slate-900">SERIM ECOTECH</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="#" className="hover:text-slate-900 transition-colors">회사소개</Link>
          <Link href="#" className="hover:text-slate-900 transition-colors">제품소개</Link>
          <Link href="#" className="hover:text-slate-900 transition-colors">시공사례</Link>
          <Link href="/consultation" className="hover:text-slate-900 transition-colors">건축상담</Link>
          <Link href="#" className="hover:text-slate-900 transition-colors">고객센터</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-slate-600">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-semibold">010-6418-8167</span>
          </div>
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
