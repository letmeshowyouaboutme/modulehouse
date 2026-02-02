'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import ConsultationModal from '@/components/ConsultationModal';
import { getProduct } from '@/data/products';


export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const product = getProduct(id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">상품을 찾을 수 없습니다.</h1>
                <button
                    onClick={() => router.push('/')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    홈으로 돌아가기
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

                {/* Navigation / Breadcrumb */}
                <button
                    onClick={() => router.push('/')}
                    className="mb-6 text-gray-500 hover:text-gray-900 flex items-center gap-1"
                >
                    ← 목록으로 돌아가기
                </button>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
                    {/* Image Section */}
                    <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center sm:aspect-w-2 sm:aspect-h-3 h-[500px]">
                        <span className="text-4xl text-gray-500 font-bold">Photo {product.id}</span>
                    </div>

                    {/* Product Info Section */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

                        <div className="mt-6">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900 font-bold">{product.price}</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-900">상품 설명</h3>
                            <div className="mt-2 space-y-6 text-base text-gray-700">
                                <p>{product.description}</p>
                                <p>
                                    모든 모듈러 주택은 공장에서 정밀 제작되어 현장으로 운송됩니다.
                                    단열, 방수, 전기 설비가 모두 포함된 올인원 패키지입니다.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 flex gap-4">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transform active:scale-95 transition-all"
                            >
                                상담 신청하기
                            </button>
                        </div>

                        <div className="mt-6 text-sm text-gray-500">
                            * 설치 가능 여부 및 배송료는 상담을 통해 안내해 드립니다.
                        </div>
                    </div>
                </div>
            </div>

            <ConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={product.name}
                productId={product.id}
            />
        </div>
    );
}
