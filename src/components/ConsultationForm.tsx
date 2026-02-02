"use client";

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ConsultationForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isLocationUndecided, setIsLocationUndecided] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="text-center py-24 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8">
                    <CheckCircle className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">상담 신청이 완료되었습니다</h3>
                <p className="text-lg text-slate-600 mb-8">
                    남겨주신 정보로 빠른 시일 내에 연락드리겠습니다.<br />
                    감사합니다.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                >
                    추가 문의하기
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto">
            {/* Header text removed as requested (handled by page wrapper or just removed) */}

            <form onSubmit={handleSubmit} className="border-t-2 border-slate-900">
                {/* 성명 */}
                <div className="flex flex-col md:flex-row border-b border-slate-200">
                    <div className="w-full md:w-48 bg-slate-50 p-4 md:p-6 flex items-center">
                        <label htmlFor="name" className="font-bold text-slate-800">성명 <span className="text-red-500">*</span></label>
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full md:w-80 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="이름을 입력하세요"
                        />
                    </div>
                </div>

                {/* 연락처 */}
                <div className="flex flex-col md:flex-row border-b border-slate-200">
                    <div className="w-full md:w-48 bg-slate-50 p-4 md:p-6 flex items-center">
                        <label htmlFor="phone" className="font-bold text-slate-800">연락처 <span className="text-red-500">*</span></label>
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                        <input
                            type="tel"
                            id="phone"
                            required
                            className="w-full md:w-80 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="숫자만 입력하세요"
                        />
                    </div>
                </div>

                {/* 이메일 */}
                <div className="flex flex-col md:flex-row border-b border-slate-200">
                    <div className="w-full md:w-48 bg-slate-50 p-4 md:p-6 flex items-center">
                        <label htmlFor="email" className="font-bold text-slate-800">이메일</label>
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                        <input
                            type="email"
                            id="email"
                            className="w-full md:w-80 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="example@email.com"
                        />
                    </div>
                </div>

                {/* 건축예정지 */}
                <div className="flex flex-col md:flex-row border-b border-slate-200">
                    <div className="w-full md:w-48 bg-slate-50 p-4 md:p-6 flex items-center">
                        <label htmlFor="location" className="font-bold text-slate-800">건축예정지</label>
                    </div>
                    <div className="flex-1 p-4 md:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <input
                            type="text"
                            id="location"
                            disabled={isLocationUndecided}
                            className="w-full md:w-80 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:bg-slate-100 disabled:text-slate-400"
                            placeholder="주소를 입력하세요"
                        />
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={isLocationUndecided}
                                onChange={(e) => setIsLocationUndecided(e.target.checked)}
                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                            />
                            <span className="text-slate-700 text-sm">미정</span>
                        </label>
                    </div>
                </div>

                {/* 건축시기 */}
                <div className="flex flex-col md:flex-row border-b border-slate-200">
                    <div className="w-full md:w-48 bg-slate-50 p-4 md:p-6 flex items-center">
                        <label htmlFor="date" className="font-bold text-slate-800">건축시기</label>
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                        <div className="relative w-full md:w-80">
                            <input
                                type="date"
                                id="date"
                                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* 건축용도 */}
                <div className="flex flex-col md:flex-row border-b border-slate-200">
                    <div className="w-full md:w-48 bg-slate-50 p-4 md:p-6 flex items-center">
                        <label className="font-bold text-slate-800">건축용도</label>
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                        <div className="flex flex-wrap gap-y-3 gap-x-6">
                            {['단독주택(전원주택)', '상가주택', '상가', '펜션', '단지개발', '소형주택', '농막'].map((item) => (
                                <label key={item} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                                    <input
                                        type="radio"
                                        name="usage"
                                        value={item}
                                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    />
                                    <span className="text-slate-700 text-sm">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 건축규모 */}
                <div className="flex flex-col md:flex-row border-b border-slate-200">
                    <div className="w-full md:w-48 bg-slate-50 p-4 md:p-6 flex items-center">
                        <label htmlFor="scale" className="font-bold text-slate-800">건축규모</label>
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                        <input
                            type="text"
                            id="scale"
                            className="w-full md:w-80 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="평수 / 층수를 입력하세요"
                        />
                    </div>
                </div>

                {/* 건축공법 */}
                <div className="flex flex-col md:flex-row border-b border-slate-200">
                    <div className="w-full md:w-48 bg-slate-50 p-4 md:p-6 flex items-center">
                        <label className="font-bold text-slate-800">건축공법</label>
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                        <div className="flex flex-wrap gap-y-3 gap-x-6">
                            {['경량목구조', '중목구조', '통나무', '한옥', '미정'].map((item) => (
                                <label key={item} className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                                    <input
                                        type="radio"
                                        name="method"
                                        value={item}
                                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    />
                                    <span className="text-slate-700 text-sm whitespace-nowrap">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-12 flex justify-center">
                    <button
                        type="submit"
                        className="px-16 py-4 bg-blue-700 text-white text-lg font-bold rounded-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center"
                    >
                        <Send className="w-5 h-5 mr-2" />
                        상담 신청하기
                    </button>
                </div>
            </form>
        </div>
    );
}
