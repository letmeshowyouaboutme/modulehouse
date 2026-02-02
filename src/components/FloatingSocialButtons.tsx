"use client";

import { Youtube, FileText } from 'lucide-react';

export default function FloatingSocialButtons() {
    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
            {/* YouTube Button */}
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-red-600 hover:bg-red-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="유튜브 채널"
                title="유튜브 링크를 추가해주세요"
            >
                <Youtube className="w-7 h-7 text-white" />
                <span className="absolute right-16 bg-slate-900 text-white px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    유튜브
                </span>
            </a>

            {/* Blog Button */}
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="블로그"
                title="블로그 링크를 추가해주세요"
            >
                <FileText className="w-7 h-7 text-white" />
                <span className="absolute right-16 bg-slate-900 text-white px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    블로그
                </span>
            </a>
        </div>
    );
}
