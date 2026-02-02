import { Home, Trees, Hammer, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: Home,
        title: "이동식 주택",
        description: "합리적인 비용으로 완성하는 나만의 세컨드 하우스. 설치부터 입주까지 원스톱 서비스를 제공합니다."
    },
    {
        icon: Trees,
        title: "체류형 쉼터",
        description: "자연 속에서 즐기는 진정한 휴식. 농막보다 더 편리하고 쾌적한 공간을 제안합니다."
    },
    {
        icon: Hammer,
        title: "목조 주택",
        description: "친환경 자재를 사용한 고품격 목조 주택. 뛰어난 단열성과 내구성을 자랑합니다."
    },
    {
        icon: ShieldCheck,
        title: "책임 시공",
        description: "계약부터 시공, 사후관리까지. 전문가가 직접 관리하는 믿을 수 있는 품질을 약속합니다."
    }
];

export default function FeatureSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        왜 <span className="text-blue-600">모두가하우징</span>인가요?
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        단순한 건축을 넘어 삶의 가치를 높이는 공간을 만듭니다.<br />
                        오랜 경험과 노하우로 최고의 만족을 드립니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                <feature.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
