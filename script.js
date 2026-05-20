/**
 * (주) 비에이텍 프리미엄 웹 인터랙션 스크립트
 * Senior UI/UX & Frontend Development
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. Preloader Control
  // ==========================================
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => {
        preloader.remove();
      }, 800);
    }, 600); // Premium brief loading look
  });

  // ==========================================
  // 2. Sticky Header & Scroll Top
  // ==========================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });

  // ==========================================
  // 3. Mobile Navigation Menu Toggle
  // ==========================================
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('open');
      
      // Transform hamburger to X
      const spans = menuToggle.querySelectorAll('span');
      if (menuToggle.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when navigation links are clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('open');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // ==========================================
  // 4. Intersection Observer - Scroll Reveal
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // 5. Stat Counter Animation
  // ==========================================
  const statsElements = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  const countUp = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / target));
    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(target / 50); // Increment steps
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      // Formatting symbols
      if (target === 15) {
        element.textContent = current + '+';
      } else if (target === 1000) {
        element.textContent = current.toLocaleString() + '+';
      } else if (target === 100) {
        element.textContent = current + '%';
      } else {
        element.textContent = current;
      }
    }, 30);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats) {
        statsElements.forEach(el => countUp(el));
        animatedStats = true;
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // ==========================================
  // 6. Interactive Certificate Modals
  // ==========================================
  // Meta-data database based on actual Batek documents
  const certData = {
    kc: {
      title: '위생안전기준 인증서 (KC)',
      issuer: '한국물기술인증원',
      specs: [
        { label: '인증서명', value: '위생안전기준 인증서 (수도용)' },
        { label: '인증번호', value: 'KCW-2025-0163' },
        { label: '제품명 및 용도', value: '부스터 펌프 시스템 (일반수도용자재)' },
        { label: '제조업체 / 대표', value: '비에이텍(주) (대표자: 조세연)' },
        { label: '최초 인증일', value: '2025년 09월 19일' },
        { label: '정기검사 신청기한', value: '2027년 09월 18일 (유효기간)' },
        { label: '인증 기관', value: '한국물기술인증원장' },
        { label: '인증 근거', value: '수도법 제14조제1항 및 같은 법 시행령 제24조의2제5항' }
      ]
    },
    mbiz: {
      title: '경영혁신형 중소기업(MAIN-BIZ) 확인서',
      issuer: '중소벤처기업부',
      specs: [
        { label: '확인서명', value: '경영혁신형 중소기업(MAIN-BIZ) 확인서' },
        { label: '확인서 번호', value: '제 R180801-01794 호' },
        { label: '기업명', value: '비에이텍(주)' },
        { label: '대표자', value: '조세연' },
        { label: '소재지(주소)', value: '강원특별자치도 춘천시 퇴계공단2길 64 (퇴계동)' },
        { label: '유효기간', value: '2024년 09월 14일 ~ 2027년 09월 13일' },
        { label: '확인 기관', value: '중소벤처기업부 장관' },
        { label: '인증 근거', value: '중소기업기술혁신 촉진법 제15조의3에 따른 경영혁신형 중소기업' }
      ]
    },
    iso: {
      title: '품질경영시스템 인증서 (ISO 9001:2015)',
      issuer: 'ICR (International Certification Registrar)',
      specs: [
        { label: '인증서명', value: '품질경영시스템 인증서 (국문 표준)' },
        { label: '인증서 번호', value: 'Q1291124' },
        { label: '인증 대상', value: '비에이텍(주)' },
        { label: '인증 범위', value: '부스터펌프시스템, 벌류트, 정량, 수중, 오수, 슬러지, 심정용, 전진공동 펌프의 제조' },
        { label: '최초 인증일자', value: '2024년 08월 23일' },
        { label: '발행 일자', value: '2024년 08월 23일' },
        { label: '유효기간', value: '2027년 08월 22일' },
        { label: '인증기관/기구', value: 'ICR / IAS & IAF 인정기관' }
      ]
    }
  };

  const certCards = document.querySelectorAll('.cert-card');
  const modalOverlay = document.getElementById('cert-modal-overlay');
  const modalTitle = document.getElementById('modal-title-text');
  const modalBody = document.getElementById('modal-body-content');
  const modalClose = document.getElementById('modal-close-btn');

  const openModal = (certKey) => {
    const data = certData[certKey];
    if (!data) return;

    // Update modal content
    modalTitle.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px; height:24px; color:#3B82F6;">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11 12 14 22 4" />
      </svg>
      <span>${data.title}</span>
    `;

    // Render specifications table
    let tableHtml = `<table class="spec-table">`;
    data.specs.forEach(spec => {
      tableHtml += `
        <tr>
          <th>${spec.label}</th>
          <td>${spec.value}</td>
        </tr>
      `;
    });
    tableHtml += `</table>`;
    
    modalBody.innerHTML = tableHtml;

    // Show Modal with body scroll lock
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Bind clicks
  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const certKey = card.getAttribute('data-cert');
      openModal(certKey);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  // Escape key closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // ==========================================
  // 7. Contact Form Validation & Toast Feedback
  // ==========================================
  const enquiryForm = document.getElementById('enquiry-form');
  const toast = document.getElementById('success-toast');

  const showToast = () => {
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4000);
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const nameField = document.getElementById('name');
      const emailField = document.getElementById('email');
      const phoneField = document.getElementById('phone');
      const messageField = document.getElementById('message');

      // Reset errors
      const errorDivs = enquiryForm.querySelectorAll('.form-error');
      errorDivs.forEach(div => div.style.display = 'none');
      const controls = enquiryForm.querySelectorAll('.form-control');
      controls.forEach(c => c.classList.remove('invalid'));

      // Validate Name
      if (!nameField.value.trim()) {
        document.getElementById('error-name').style.display = 'block';
        nameField.classList.add('invalid');
        isValid = false;
      }

      // Validate Email
      if (!emailField.value.trim() || !validateEmail(emailField.value.trim())) {
        document.getElementById('error-email').style.display = 'block';
        emailField.classList.add('invalid');
        isValid = false;
      }

      // Validate Phone
      if (!phoneField.value.trim()) {
        document.getElementById('error-phone').style.display = 'block';
        phoneField.classList.add('invalid');
        isValid = false;
      }

      // Validate Message
      if (!messageField.value.trim()) {
        document.getElementById('error-message').style.display = 'block';
        messageField.classList.add('invalid');
        isValid = false;
      }

      if (isValid) {
        // Success scenario
        showToast();
        enquiryForm.reset();
      }
    });

    // Real-time input cleaning
    enquiryForm.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
          input.classList.remove('invalid');
          const errorId = `error-${input.id}`;
          const errDiv = document.getElementById(errorId);
          if (errDiv) errDiv.style.display = 'none';
        }
      });
    });
  }

  // ==========================================
  // 7.2. Product Portfolio Category Filtering
  // ==========================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active tab button
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hidden');
          // Restart animation slightly
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ==========================================
  // 7.4. Track Record Performance Dashboard (Filter & Search)
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('record-search');
  const recordTable = document.getElementById('track-record-table');
  const recordRows = recordTable ? recordTable.querySelectorAll('tbody tr') : [];
  const noDataAlert = document.getElementById('record-no-data');

  let currentRegion = 'all';
  let currentSearchQuery = '';

  const filterTrackRecord = () => {
    let visibleCount = 0;

    recordRows.forEach(row => {
      const rowRegion = row.getAttribute('data-region');
      const rowText = row.textContent.toLowerCase();
      
      const regionMatch = (currentRegion === 'all' || rowRegion === currentRegion);
      const searchMatch = (rowText.includes(currentSearchQuery));

      if (regionMatch && searchMatch) {
        row.style.display = '';
        visibleCount++;
      } else {
        row.style.display = 'none';
      }
    });

    if (noDataAlert) {
      noDataAlert.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRegion = btn.getAttribute('data-region');
      filterTrackRecord();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      filterTrackRecord();
    });
  }

  // ==========================================
  // 8. Kakao Map Dynamic Loader (Kakao 지도 연동)
  // ==========================================
  // [B2B 개발 환경 가이드]
  // 실운영 서버 연동 시 아래 KAKAO_MAP_API_KEY 변수에 발급받은 JS API Key를 입력하면
  // 자동으로 실시간 지도 프레임이 활성화되며 주소 마커를 랜더링합니다.
  const KAKAO_MAP_API_KEY = ""; // <- 여기에 카카오 맵 JavaScript API Key 입력
  
  const initKakaoMap = () => {
    if (!KAKAO_MAP_API_KEY) return; // API Key가 없을 때는 아름다운 Mock 지도를 유지합니다.

    // Load Kakao Map SDK dynamically
    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`;
    script.async = true;
    
    script.onload = () => {
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('kakao-map');
        const fallbackContainer = document.getElementById('map-fallback');
        
        // Toggle view
        fallbackContainer.style.display = 'none';
        mapContainer.style.display = 'block';

        // 춘천시 퇴계공단2길 64 좌표설정
        // 강원특별자치도 춘천시 퇴계동 1018-12(퇴계공단)의 위경도는 대략 37.8545, 127.7285 부근입니다.
        const position = new kakao.maps.LatLng(37.85451, 127.72851);
        
        const mapOptions = {
          center: position,
          level: 3
        };

        const map = new kakao.maps.Map(mapContainer, mapOptions);

        // Marker
        const marker = new kakao.maps.Marker({
          position: position
        });
        marker.setMap(map);

        // Info window (Tooltip)
        const iwContent = `
          <div style="padding:10px 15px; font-size:12px; font-weight:700; color:#0A2540; text-align:center; min-width:180px;">
            (주) 비에이텍 본사 및 공장
            <div style="font-weight:400; color:#64748b; font-size:10px; margin-top:2px;">강원특별자치도 춘천시 퇴계공단2길 64</div>
          </div>
        `;
        const infowindow = new kakao.maps.InfoWindow({
          content: iwContent
        });
        infowindow.open(map, marker);

        // Responsive map center recalculation
        window.addEventListener('resize', () => {
          map.setCenter(position);
        });
      });
    };

    document.head.appendChild(script);
  };

  initKakaoMap();
});
