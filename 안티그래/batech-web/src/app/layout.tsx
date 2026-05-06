import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(주)비에이텍 - 신뢰받는 물의 기술",
  description: "무맥동 기술로 물의 흐름을 완성하다. (주)비에이텍 공식 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased font-sans text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
