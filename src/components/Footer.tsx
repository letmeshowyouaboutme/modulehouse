import Link from 'next/link';
import { Youtube, FileText, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#111b15', color: 'rgba(255,255,255,0.6)' }}>
      {/* Top accent line */}
      <div className="h-[3px]" style={{ background: 'var(--accent)' }} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-6 rounded-full" style={{ background: 'var(--accent)' }} />
              <div>
                <p className="text-white font-bold tracking-wider uppercase text-base" style={{ letterSpacing: '0.1em' }}>
                  SERIM ECOTECH
                </p>
                <p className="text-[9px] tracking-widest uppercase mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  MODULE HOUSE
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              원하시는 집을 원하는 때에 맞게 배송해 드리겠습니다.<br />
              좋은 품질과 친절한 서비스로 행복을 드리겠습니다.
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                href="https://www.youtube.com/watch?v=C7dPjN2WU_4&list=RDC7dPjN2WU_4&start_radio=1"
                target="_blank"
                className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-200 hover:opacity-90"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <Youtube className="h-4 w-4 text-white" />
              </Link>
              <Link
                href="https://blog.naver.com/letmeshowyouaboutme"
                target="_blank"
                className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-200 hover:opacity-90"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <FileText className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4
              className="text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ color: 'var(--accent)' }}
            >
              고객센터
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" style={{ color: 'var(--accent)' }} />
                <span className="text-xl font-bold text-white">010-6418-8167</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }} />
                <span>평일 09:00 – 18:00</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }} />
                <span style={{ fontSize: '12px' }}>letmeshowyouaboutme@naver.com</span>
              </div>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                주말 및 공휴일 휴무
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ color: 'var(--accent)' }}
            >
              바로가기
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: '회사소개', href: '#' },
                { label: '제품소개', href: '#' },
                { label: '시공사례', href: '#' },
                { label: '건축상담 신청', href: '/consultation' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    <span className="text-xs" style={{ color: 'var(--accent)' }}>›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4
              className="text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ color: 'var(--accent)' }}
            >
              회사 정보
            </h4>
            <div className="space-y-2 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <p className="font-semibold text-sm text-white">㈜세림에코텍</p>
              <p>부산광역시 남구 대연동</p>
              <p>팩스: 0504-383-4634</p>
              <p>사업자등록번호: 748-81-03210</p>
              <p>통신판매업: 2100-예시-00000</p>
              <p>전문건설업: 부산-00-바-00호</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2024 SERIM ECOTECH. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Designed for trust and quality
          </p>
        </div>
      </div>
    </footer>
  );
}
