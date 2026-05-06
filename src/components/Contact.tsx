"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("문의가 성공적으로 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.");
    setFormData({ name: "", contact: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-batech-dark h-[300px] z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-10 md:p-14">
            <div className="text-center mb-10">
              <h2 className="text-sm font-bold text-batech-blue tracking-wider uppercase mb-3">Contact Us</h2>
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                문의하기
              </h3>
              <p className="text-gray-500">
                제품, 기술, 견적 등 궁금하신 점을 남겨주시면 신속하게 답변해 드리겠습니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">성함 / 회사명 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-batech-blue focus:border-batech-blue transition-colors outline-none"
                    placeholder="홍길동 / (주)비에이텍"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">연락처 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-batech-blue focus:border-batech-blue transition-colors outline-none"
                    placeholder="010-0000-0000 또는 이메일"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">문의 내용 <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-batech-blue focus:border-batech-blue transition-colors outline-none resize-y"
                  placeholder="문의하실 내용을 상세히 적어주세요."
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-batech-blue text-white rounded-xl font-bold text-lg hover:bg-batech-dark transition-colors shadow-lg hover:shadow-xl w-full md:w-auto min-w-[200px]"
                >
                  <Send className="w-5 h-5" />
                  문의 보내기
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
