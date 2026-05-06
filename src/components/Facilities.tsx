"use client";

import { motion } from "framer-motion";

const facilities = [
  {
    id: 1,
    title: "펌프제작소",
    image: "/images/pump_manufacturing.png",
    description: "최신 설비와 전문 기술 인력이 정밀한 펌프 부품을 가공 및 조립하는 핵심 생산 시설입니다."
  },
  {
    id: 2,
    title: "성능시험장",
    image: "/images/performance_testing.png",
    description: "완성된 펌프의 유량, 압력, 무맥동 성능을 첨단 장비로 엄격하게 검증하는 테스트 랩입니다."
  },
  {
    id: 3,
    title: "자재관리소",
    image: "/images/materials_management.png",
    description: "고품질 원자재와 부품을 체계적으로 분류하고 안전한 환경에서 관리하는 자재 창고입니다."
  },
  {
    id: 4,
    title: "펌프 출고대기소",
    image: "/images/pump_dispatch.png",
    description: "최종 검사가 완료된 제품을 안전하게 포장하여 고객에게 배송하기 위해 대기하는 출하장입니다."
  }
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-batech-blue tracking-wider uppercase mb-3">Our Facilities</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              첨단 생산 및 관리 시설
            </h3>
            <p className="text-lg text-gray-600">
              최고의 품질을 위해 (주)비에이텍은 체계적이고 전문적인 생산 인프라를 갖추고 있습니다.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 bg-white relative">
                <div className="absolute -top-5 right-6 w-10 h-10 bg-batech-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:-translate-y-1 transition-transform">
                  0{facility.id}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-batech-blue transition-colors">
                  {facility.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
