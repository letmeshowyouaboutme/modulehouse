"use client";

import { Youtube, FileText } from 'lucide-react';

export default function FloatingSocialButtons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {/* YouTube */}
      <a
        href="https://www.youtube.com/watch?v=C7dPjN2WU_4&list=RDC7dPjN2WU_4&start_radio=1"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-10 h-10 rounded-sm shadow-lg transition-all duration-300 hover:w-28"
        style={{ background: 'var(--primary)' }}
        aria-label="유튜브 채널"
      >
        <Youtube className="w-4 h-4 text-white shrink-0" />
        <span className="absolute right-0 pr-12 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none">
          유튜브
        </span>
      </a>

      {/* Blog */}
      <a
        href="https://blog.naver.com/letmeshowyouaboutme"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-10 h-10 rounded-sm shadow-lg transition-all duration-300 hover:w-28"
        style={{ background: 'var(--primary)' }}
        aria-label="블로그"
      >
        <FileText className="w-4 h-4 text-white shrink-0" />
        <span className="absolute right-0 pr-12 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none">
          블로그
        </span>
      </a>

      {/* Gold accent bar */}
      <div
        className="w-[3px] h-8 mx-auto rounded-full mt-1"
        style={{ background: 'var(--accent)', opacity: 0.6 }}
      />
    </div>
  );
}
