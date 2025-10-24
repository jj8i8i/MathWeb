function searchExams() {
    // 1. รับค่าจากช่องค้นหา
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();

    // 2. หากลุ่มของการ์ดข้อสอบทั้งหมด
    let examGrid = document.querySelectorAll('.exam-grid');
    
    // 3. วนลูปในแต่ละหมวดหมู่
    examGrid.forEach(grid => {
        let cards = grid.getElementsByClassName('exam-card');

        // 4. วนลูปในการ์ดแต่ละใบเพื่อเปรียบเทียบชื่อ
        for (let i = 0; i < cards.length; i++) {
            let h3 = cards[i].getElementsByTagName("h3")[0];
            if (h3) {
                let txtValue = h3.textContent || h3.innerText;
                // 5. แสดง/ซ่อนการ์ดตามผลการค้นหา
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    cards[i].classList.remove('hidden');
                } else {
                    cards[i].classList.add('hidden');
                }
            }
        }
    });
}
