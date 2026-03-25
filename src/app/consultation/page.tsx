import type { Metadata } from "next";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
    title: "건축상담 - 세림에코텍",
    description: "세림에코텍의 전문 건축가가 고객님의 라이프스타일에 맞는 최적의 공간을 제안해드립니다.",
};

export default function ConsultationPage() {
    return (
        <div className="min-h-screen" style={{ background: 'var(--background)' }}>
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--primary)' }}>
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-27b88e35eabb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="relative container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <p
                            className="text-xs font-semibold tracking-[0.3em] uppercase mb-5"
                            style={{ color: 'var(--accent)' }}
                        >
                            FREE CONSULTATION
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">
                            건축상담
                        </h1>
                        <p className="text-base md:text-lg mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            세림에코텍 제품 관련 상담을 받아보세요
                        </p>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            전문 건축가가 고객님의 라이프스타일에 맞는 최적의 공간을 제안해드립니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <ConsultationForm />
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-16" style={{ background: 'var(--surface-secondary)', borderTop: '1px solid var(--border)' }}>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--accent)' }}>
                                CONTACT
                            </p>
                            <h2 className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
                                문의 정보
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-5">
                            {[
                                { title: '본사', content: '부산광역시 남구 대연동' },
                                { title: '연락처', content: '대표전화: 010-6418-8167\n팩스: 0504-383-4634' },
                                { title: '이메일', content: 'letmeshowyouaboutme@naver.com' },
                            ].map(({ title, content }) => (
                                <div
                                    key={title}
                                    className="p-7 rounded-sm"
                                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                                >
                                    <div
                                        className="w-[3px] h-5 rounded-full mb-4"
                                        style={{ background: 'var(--accent)' }}
                                    />
                                    <h3 className="font-bold text-base mb-3" style={{ color: 'var(--primary)' }}>
                                        {title}
                                    </h3>
                                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-muted)' }}>
                                        {content}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center text-xs" style={{ color: 'var(--text-muted)' }}>
                            <p className="mb-1 font-semibold" style={{ color: 'var(--primary)' }}>㈜세림에코텍</p>
                            <p>사업자등록번호: 748-81-03210 · 통신판매업등록번호: 2100-예시-00000 · 전문건설업등록번호: 부산-00-바-00호</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
