import Link from 'next/link';
import { Youtube } from 'lucide-react';
import { FileText } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">MODUGA HOUSING</h3>
                    <p className="text-sm leading-relaxed">
                        모두가 꿈꾸는 집, 모두가 행복한 공간을 만듭니다.<br />
                        최고의 기술력과 정성으로 보답하겠습니다.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">고객센터</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="text-2xl font-bold text-white">1833-6188</li>
                        <li>평일 09:00 - 18:00</li>
                        <li>주말 및 공휴일 휴무</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">바로가기</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-white transition-colors">회사소개</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">제품소개</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">시공사례</Link></li>
                        <li><Link href="/consultation" className="hover:text-white transition-colors">건축상담신청</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">SNS</h4>
                    <div className="flex gap-4">
                        <Link href="https://www.youtube.com/watch?v=C7dPjN2WU_4&list=RDC7dPjN2WU_4&start_radio=1" target="_blank" className="hover:text-white transition-colors"><Youtube className="h-5 w-5" /></Link>
                        <Link href="https://blog.naver.com/letmeshowyouaboutme" target="_blank" className="hover:text-white transition-colors"><FileText className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                <p>© 2024 MODUGA HOUSING. All rights reserved.</p>
            </div>
        </footer>
    );
}
