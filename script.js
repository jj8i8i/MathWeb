document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- Generate TMO Exams ---
    const tmoGrid = document.getElementById('tmoGrid');
    if (tmoGrid) {
        let tmoCards = '';
        for (let i = 22; i >= 1; i--) {
            tmoCards += `
            <div class="exam-card">
                <span class="exam-tag">ครั้งที่ ${i}</span>
                <h3>ข้อสอบ TMO ครั้งที่ ${i}</h3>
                <p class="subtitle">การแข่งขันคณิตศาสตร์โอลิมปิกระดับชาติ</p>
                <div class="button-group">
                    <a href="files/TMO_${i}.pdf" class="download-btn" download><i class="fa-solid fa-file-pdf"></i> ข้อสอบ</a>
                    <a href="files/TMO_${i}_sol.pdf" class="solution-btn" download><i class="fa-solid fa-key"></i> เฉลย</a>
                </div>
            </div>`;
        }
        tmoGrid.innerHTML = tmoCards;
    }

});

// --- Search Function ---
function searchExams() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let cards = document.querySelectorAll('.exam-card');

    cards.forEach(card => {
        let title = card.querySelector("h3");
        if (title) {
            let txtValue = title.textContent || title.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        }
    });
}
