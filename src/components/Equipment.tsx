"use client";

import { motion } from "framer-motion";
import { Settings, Zap, Droplet } from "lucide-react";

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-batech-blue tracking-wider uppercase mb-3">Core Technology</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              PKD 시리즈 (무맥동 정량펌프)
            </h3>
            <p className="text-lg text-gray-600">
              (주)비에이텍의 혁신적인 기술력이 집약된 PKD 시리즈는 정밀한 유량 제어와 완벽한 무맥동을 실현합니다.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
          >
            <div className="aspect-w-16 aspect-h-12 w-full relative h-[400px]">
              <img
                src="/images/equipment_cam.png"
                alt="등속도캠 (Constant Velocity Cam)"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-batech-dark/80 to-transparent flex items-end">
                <div className="p-8">
                  <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                    Patented Tech
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-2">등속도캠 기술</h4>
                  <p className="text-blue-100 text-sm">특수 설계된 캠 곡선으로 피스톤의 이송 속도를 일정하게 유지</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-batech-light flex items-center justify-center text-batech-blue">
                  <Droplet className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">완벽한 무맥동 실현</h4>
                <p className="text-gray-600">
                  등속도캠을 이용한 2련 피스톤 구동 방식으로 토출 유량의 맥동을 획기적으로 감소시켰습니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-batech-light flex items-center justify-center text-batech-blue">
                  <Settings className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">초정밀 유량 제어</h4>
                <p className="text-gray-600">
                  다이얼 또는 인버터를 통한 미세 유량 조절이 가능하며, 장시간 운전 시에도 높은 재현성을 유지합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-batech-light flex items-center justify-center text-batech-blue">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">높은 내구성 및 효율</h4>
                <p className="text-gray-600">
                  견고한 설계와 고품질 소재 사용으로 유지보수 비용을 절감하고 공정 효율을 극대화합니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
