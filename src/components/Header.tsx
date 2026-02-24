'use client';

import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, userDoc, loading } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await signOut(auth);
    router.push('/');
  }

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
          <Link href="/preconstruction" className="hover:text-slate-900 transition-colors">시공 전 정보</Link>
          <Link href="#" className="hover:text-slate-900 transition-colors">고객센터</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-slate-600">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-semibold">010-6418-8167</span>
          </div>

          {!loading && (
            <>
              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  {userDoc?.role === 'admin' && (
                    <Link
                      href="/admin"
                      className="text-xs font-semibold text-white bg-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      관리자
                    </Link>
                  )}
                  <span className="text-sm text-slate-600">{userDoc?.name ?? user.email}</span>
                  <button
                    onClick={handleLogout}
                    className="text-xs font-semibold text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="hidden md:inline-flex text-xs font-semibold text-white bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  로그인
                </Link>
              )}
            </>
          )}

          <button className="md:hidden p-2 text-slate-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
