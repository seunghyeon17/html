export default function Footer() {
  return (
    <footer className="bg-batech-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-batech-dark font-bold text-xl">
                B
              </div>
              <span className="font-black text-2xl tracking-tight">
                BA TECH
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              신뢰받는 물의 기술, 무맥동 기술로 물의 흐름을 완성합니다. 최고의 품질과 혁신적인 기술력으로 고객에게 보답하는 기업이 되겠습니다.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="font-semibold w-16 flex-shrink-0">주소</span>
                <span>강원특별자치도 춘천시 퇴계공단2길 64 (퇴계동)</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-16 flex-shrink-0">전화</span>
                <span>033-264-9243</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-16 flex-shrink-0">설립일</span>
                <span>2010년 11월 1일</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Certifications</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• ISO 9001 인증</li>
              <li>• 경영혁신형 중소기업(Main-Biz) 확인</li>
              <li>• 벤처기업 인증</li>
              <li>• 기술혁신형 중소기업(Inno-Biz) 확인</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} (주)비에이텍. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
