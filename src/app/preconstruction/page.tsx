'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { preconstructionData } from '@/data/preconstruction';

function YouTubeCard({ videoId, title }: { videoId: string; title: string }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-video bg-slate-100">
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600/90 rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-slate-800 line-clamp-2 leading-snug">{title}</p>
      </div>
    </a>
  );
}

export default function PreconstructionPage() {
  const { user, userDoc, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 text-sm">로딩 중...</p>
      </div>
    );
  }

  if (!user) return null;

  if (!userDoc?.approved) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 w-full max-w-md text-center">
          <div className="text-4xl mb-4">⏳</div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">승인 대기 중</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            관리자 승인 후 시공 전 정보 페이지에 접근하실 수 있습니다.
            <br />
            승인이 완료되면 별도로 안내드립니다.
          </p>
          <p className="text-slate-400 text-xs mt-4">
            문의: 010-6418-8167
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">시공 전 정보</h1>
          <p className="text-slate-500 text-sm">
            지자체별 법령 안내 및 시공 관련 영상 자료입니다. 실제 설치 전 관할 지자체에 반드시 확인하시기 바랍니다.
          </p>
        </div>

        <div className="space-y-12">
          {preconstructionData.map((section) => (
            <section key={section.region}>
              <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-800 mb-2">{section.region}</h2>
                <p className="text-slate-600 text-sm leading-relaxed bg-white rounded-xl border border-slate-100 px-4 py-3">
                  {section.description}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {section.videos.map((video) => (
                  <YouTubeCard key={video.videoId + video.title} videoId={video.videoId} title={video.title} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
