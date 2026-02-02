import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSocialButtons from "@/components/FloatingSocialButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "모두가하우징 - 이동식주택, 목조주택 전문",
  description: "체류형쉼터, 이동식주택, 목조주택, 모듈러패시브하우스 전문 시공",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingSocialButtons />
      </body>
    </html>
  );
}
