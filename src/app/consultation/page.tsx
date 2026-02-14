import type { Metadata } from "next";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
    title: "건축상담 - 모두가하우징",
    description: "모두가하우징의 전문 건축가가 고객님의 라이프스타일에 맞는 최적의 공간을 제안해드립니다.",
};

export default function ConsultationPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            건축상담
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-4">
                            모두家 제품 관련 상담을 받아보세요
                        </p>
                        <p className="text-lg text-blue-200">
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
            <section className="py-12 bg-slate-100 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                            문의 정보
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 text-slate-700">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg mb-3 text-slate-900">본사</h3>
                                <p className="text-sm leading-relaxed">
                                    부산광역시 남구 대연동
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg mb-3 text-slate-900">연락처</h3>
                                <p className="text-sm leading-relaxed">
                                    대표전화: 010-6418-8167<br />
                                    팩스: 0504-383-4634
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg mb-3 text-slate-900">이메일</h3>
                                <p className="text-sm leading-relaxed">
                                    letmeshowyouaboutme@naver.com
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 text-center text-sm text-slate-600">
                            <p className="mb-2">㈜세림에코텍</p>
                            <p>사업자등록번호: 748-81-03210 | 통신판매업등록번호: 2100-예시-00000ㅇ</p>
                            <p>전문건설업등록번호: 부산-00-바-00호</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
