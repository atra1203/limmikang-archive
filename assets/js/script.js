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
}

/**
 * 작품 상세 갤러리 열기
 * @param {string} folderName - 작품 폴더명
 */
function openGallery(folderName) {
    const frame = document.getElementById('gallery-frame');
    const overlay = document.getElementById('gallery-overlay');
    
    if (frame && overlay) {
        // 기존 구조에 맞춰 ../work/ 경로 참조
        frame.src = `../work/${folderName}/${folderName}.html`;
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // 본문 스크롤 방지
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
        if (frame) frame.src = ''; // 리소스 해제
        document.body.style.overflow = 'auto'; // 스크롤 복구
    }
}

// 이스케이프 키(Esc)로 갤러리 닫기 지원
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeGallery();
});