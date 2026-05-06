"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-batech-blue tracking-wider uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              최고의 품질과 기술력으로<br />고객과 함께 성장합니다
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              2010년 설립 이래 (주)비에이텍은 지속적인 연구개발과 혁신을 통해 무맥동 정량펌프 분야의 선두주자로 자리매김하고 있습니다. 강원도 춘천시에 본사 및 생산 시설을 두고 있으며, 국내외 수많은 산업 현장에 최고의 솔루션을 제공합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="bg-batech-light p-5 rounded-xl border border-blue-100 flex-1">
                <p className="text-sm text-batech-blue font-semibold mb-1">설립일</p>
                <p className="text-xl font-bold text-gray-900">2010. 11. 01</p>
              </div>
              <div className="bg-batech-light p-5 rounded-xl border border-blue-100 flex-1">
                <p className="text-sm text-batech-blue font-semibold mb-1">본사 소재지</p>
                <p className="text-lg font-bold text-gray-900 leading-tight">강원도 춘천시 퇴계공단</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
              <Award className="w-10 h-10 text-batech-blue mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">ISO 9001</h4>
              <p className="text-gray-500 text-sm">국제 품질경영시스템 인증을 통한 엄격한 품질 관리</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow mt-0 sm:mt-8">
              <TrendingUp className="w-10 h-10 text-batech-blue mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Main-Biz</h4>
              <p className="text-gray-500 text-sm">경영혁신형 중소기업 확인을 통한 기업 경쟁력 입증</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
              <CheckCircle className="w-10 h-10 text-batech-blue mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Inno-Biz</h4>
              <p className="text-gray-500 text-sm">기술혁신형 중소기업 인증 보유 및 지속적인 R&D 투자</p>
            </div>
            
            <div className="bg-batech-blue p-6 rounded-2xl shadow-lg mt-0 sm:mt-8 text-white flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-2">신뢰와 기술력</h4>
              <p className="text-blue-100 text-sm">
                (주)비에이텍은 언제나 고객의 요구에 부합하는 최고의 제품만을 고집합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
