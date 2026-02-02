'use client';

import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    productId: string;
}

export default function ConsultationModal({ isOpen, onClose, productName, productId }: ConsultationModalProps) {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [showPostcode, setShowPostcode] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        setAddress(fullAddress);
        setShowPostcode(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId,
                    productName,
                    phone,
                    address,
                }),
            });

            if (response.ok) {
                alert('상담 신청이 완료되었습니다.');
                onClose();
                setPhone('');
                setAddress('');
            } else {
                alert('상담 신청 중 오류가 발생했습니다.');
            }
        } catch (error) {
            console.error('Error submitting consultation:', error);
            alert('상담 신청 중 오류가 발생했습니다.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in fade-in zoom-in duration-200 p-6">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
                    상담 신청
                    <span className="block text-sm font-normal text-gray-500 mt-1">
                        {productName} 제품에 대한 상담을 받아보세요.
                    </span>
                </h2>

                {showPostcode ? (
                    <div className="h-[400px]">
                        <DaumPostcode onComplete={handleComplete} className="h-full" />
                        <button
                            onClick={() => setShowPostcode(false)}
                            className="mt-2 w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                        >
                            주소 검색 취소
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                전화번호
                            </label>
                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="010-0000-0000"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                설치 예정 주소
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    readOnly
                                    required
                                    value={address}
                                    placeholder="주소 검색 버튼을 눌러주세요"
                                    className="flex-1 px-4 py-2 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPostcode(true)}
                                    className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors whitespace-nowrap"
                                >
                                    주소 검색
                                </button>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? '신청 중...' : '상담 신청하기'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
