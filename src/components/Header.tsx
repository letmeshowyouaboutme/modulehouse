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
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: '0 1px 20px rgba(0,0,0,0.06)',
      }}
    >
      <div className="container mx-auto flex h-[68px] items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-[3px] h-7 rounded-full transition-all duration-300 group-hover:h-8"
            style={{ background: 'var(--accent)' }}
          />
          <div>
            <span
              className="text-[17px] font-bold tracking-wider uppercase block leading-none"
              style={{ color: 'var(--primary)', letterSpacing: '0.12em' }}
            >
              SERIM ECOTECH
            </span>
            <span className="text-[9px] tracking-widest uppercase block mt-0.5" style={{ color: 'var(--text-muted)' }}>
              MODULE HOUSE
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {[
            { label: '회사소개', href: '#' },
            { label: '제품소개', href: '#' },
            { label: '시공사례', href: '#' },
            { label: '건축상담', href: '/consultation' },
            { label: '시공 전 정보', href: '/preconstruction' },
            { label: '고객센터', href: '#' },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="nav-link py-1 transition-colors duration-200"
              style={{ color: 'var(--foreground)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1.5" style={{ color: 'var(--primary)' }}>
            <Phone className="h-3.5 w-3.5" style={{ color: 'var(--accent)' }} />
            <span className="text-sm font-bold tracking-wide">010-6418-8167</span>
          </div>

          {!loading && (
            <>
              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  {userDoc?.role === 'admin' && (
                    <Link
                      href="/admin"
                      className="text-xs font-semibold text-white px-3 py-1.5 rounded-sm transition-all duration-200 hover:opacity-90"
                      style={{ background: 'var(--primary)' }}
                    >
                      관리자
                    </Link>
                  )}
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {userDoc?.name ?? user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-xs font-medium px-3 py-1.5 rounded-sm border transition-all duration-200 hover:border-current"
                    style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="hidden md:inline-flex text-xs font-semibold text-white px-5 py-2 rounded-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: 'var(--primary)' }}
                >
                  로그인
                </Link>
              )}
            </>
          )}

          <button className="md:hidden p-2" style={{ color: 'var(--primary)' }}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
