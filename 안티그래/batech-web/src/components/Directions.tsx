"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";

export default function Directions() {
  const KAKAO_MAP_URL = "https://map.kakao.com/link/map/(주)비에이텍,37.8540,127.7340"; // Dummy coordinates, real link will search by text or ID
  const KAKAO_SEARCH_URL = "https://map.kakao.com/link/search/강원특별자치도 춘천시 퇴계공단2길 64";

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-batech-blue tracking-wider uppercase mb-3">Location</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              오시는 길
            </h3>
            <p className="text-lg text-gray-600">
              (주)비에이텍 본사 및 공장으로 오시는 길을 안내해 드립니다.
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 p-10 bg-batech-blue text-white flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-8">본사 및 공장</h4>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-1">주소</p>
                  <p className="text-blue-100 leading-relaxed">
                    강원특별자치도 춘천시 퇴계공단2길 64<br />
                    (퇴계동)
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-1">전화번호</p>
                  <p className="text-blue-100 font-mono text-lg">033-264-9243</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-1">이메일</p>
                  <p className="text-blue-100">info@batech.co.kr</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-blue-800/50">
              <a
                href={KAKAO_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#FEE500] text-[#000000] rounded-xl font-bold hover:bg-[#FEE500]/90 transition-colors shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                카카오맵으로 길찾기
              </a>
            </div>
          </div>
          
          <div className="lg:w-3/5 h-[400px] lg:h-auto bg-gray-200 relative">
            {/* Placeholder for map, we use an iframe or just a map graphic */}
            <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center text-gray-500 p-8 text-center">
              <MapPin className="w-16 h-16 text-gray-400 mb-4" />
              <p className="text-lg font-medium mb-2">지도 영역</p>
              <p className="text-sm">실제 서비스 시 카카오맵 API 연동을 통해 동적 지도가 렌더링됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
