/**
 * 메뉴 탭 전환 함수
 * @param {string} id - 표시할 섹션의 ID
 */
function showPage(id) {
    // 1. 모든 컨텐츠 숨기기 및 네비게이션 활성 상태 해제
    document.querySelectorAll('.content-container').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    
    // 2. 선택한 섹션 표시
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // 3. 클릭된 메뉴 항목 활성화
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 4. 페이지 상단으로 부드럽게 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 🔥 모바일 메뉴 열려있으면 자동 닫기
    const hamburger = document.querySelector('.hamburger-btn');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const header = document.querySelector('.mobile-header');

    if (hamburger && overlay && header) {
        hamburger.classList.remove('open');
        overlay.classList.remove('open');
        header.classList.remove('menu-open');
    }
}

/**
 * 작품 상세 갤러리 열기
 * @param {string} folderName - 작품 폴더명
 */
function openGallery(folderName) {
    const frame = document.getElementById('gallery-frame');
    const overlay = document.getElementById('gallery-overlay');
    
    if (frame && overlay) {
        frame.src = `../work/${folderName}/${folderName}.html`;
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * 갤러리 닫기
 */
function closeGallery() {
    const overlay = document.getElementById('gallery-overlay');
    const frame = document.getElementById('gallery-frame');
    
    if (overlay) {
        overlay.classList.add('hidden');
        if (frame) frame.src = '';
        document.body.style.overflow = 'auto';
    }
}

// ESC 키로 갤러리 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeGallery();
});


// ========================================
// 🔥 모바일 햄버거 메뉴 제어 (추가된 부분)
// ========================================
document.addEventListener('DOMContentLoaded', function () {

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');

    function openMobileNav() {
        hamburgerBtn.classList.add('open');
        mobileNav.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        mobileNav.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        hamburgerBtn.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    hamburgerBtn.addEventListener('click', () => {
        if (mobileNav.classList.contains('open')) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

});