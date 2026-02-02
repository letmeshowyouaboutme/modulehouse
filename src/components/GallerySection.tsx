import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "양평 전원주택 25평형",
        category: "목조주택",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "가평 힐링 쉼터",
        category: "체류형 쉼터",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "강화도 모던 하우스",
        category: "이동식 주택",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "용인 타운하우스",
        category: "목조주택",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "제주도 감성 스테이",
        category: "모듈러 주택",
        image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "홍천 숲속의 집",
        category: "체류형 쉼터",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

export default function GallerySection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            시공사례
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            모두가하우징이 만든 행복한 공간들을 만나보세요.<br />
                            고객님의 꿈을 현실로 만들어 드립니다.
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="hidden md:inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        전체 프로젝트 보기 <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer"
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-blue-400 text-sm font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {project.category}
                                </span>
                                <h3 className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    {project.title}
                                </h3>
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    <span className="inline-flex items-center text-white/90 text-sm font-medium hover:text-white">
                                        자세히 보기 <ArrowUpRight className="ml-1 h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="#"
                        className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        전체 프로젝트 보기 <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
