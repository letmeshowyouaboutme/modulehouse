import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40 z-10" />
                {/* Placeholder for background image - in a real app, use next/image */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600596542815-27b88e35eabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
            </div>

            <div className="container relative z-20 px-4 mx-auto text-white">
                <div className="max-w-3xl space-y-6 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        자연과 함께하는<br />
                        <span className="text-blue-400">프리미엄 공간</span>을 만듭니다
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
                        체류형 쉼터부터 이동식 주택, 목조주택까지.<br />
                        모두가하우징은 당신이 꿈꾸는 가장 완벽한 휴식처를 선물합니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/consultation"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                        >
                            무료 견적 상담하기
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            시공사례 보기
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
