/**
 * 메뉴 탭 전환 함수
 */
function showPage(id) {
    document.querySelectorAll('.content-container')
        .forEach(el => el.classList.remove('active'));

    document.querySelectorAll('.nav-link')
        .forEach(el => el.classList.remove('active'));

    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 모바일 메뉴 자동 닫기
    const hamburger = document.querySelector('.hamburger-btn');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const header = document.querySelector('.mobile-header');

    if (hamburger && overlay && header) {
        hamburger.classList.remove('open');
        overlay.classList.remove('open');
        header.classList.remove('menu-open');
        document.body.classList.remove('no-scroll');   // 🔥 추가
    }
}


/**
 * 작품 상세 갤러리 열기
 */
function openGallery(folderName) {
    const frame = document.getElementById('gallery-frame');
    const overlay = document.getElementById('gallery-overlay');
    
    if (frame && overlay) {
        frame.src = `../work/${folderName}/${folderName}.html`;
        overlay.classList.remove('hidden');
        document.body.classList.add('no-scroll');
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
        document.body.classList.remove('no-scroll');   // 🔥 수정
    }
}


// ESC 키로 갤러리 닫기
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeGallery();
});


// ========================================
// 🔥 모바일 햄버거 메뉴 제어
// ========================================
document.addEventListener('DOMContentLoaded', function () {

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');

    function openMobileNav() {
        hamburgerBtn.classList.add('open');
        mobileNav.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        mobileNav.setAttribute('aria-hidden', 'false');
        document.body.classList.add('no-scroll');   // 🔥 수정
    }

    function closeMobileNav() {
        hamburgerBtn.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');  // 🔥 수정
    }

    hamburgerBtn.addEventListener('click', () => {
        if (mobileNav.classList.contains('open')) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

});