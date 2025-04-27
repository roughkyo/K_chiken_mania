// 메뉴 검색 기능
function searchMenu() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const menuCards = document.querySelectorAll('.menu-card');
    
    menuCards.forEach(card => {
        const menuName = card.querySelector('h3').textContent.toLowerCase();
        const menuDesc = card.querySelector('p').textContent.toLowerCase();
        
        if (menuName.includes(searchTerm) || menuDesc.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 가격 필터링 기능
function filterByPrice() {
    const priceFilter = document.getElementById('priceFilter');
    const selectedPrice = priceFilter.value;
    const menuCards = document.querySelectorAll('.menu-card');
    
    menuCards.forEach(card => {
        const priceText = card.querySelector('.price').textContent;
        const price = parseInt(priceText.replace(/[^0-9]/g, ''));
        
        switch(selectedPrice) {
            case 'under15000':
                card.style.display = price < 15000 ? 'block' : 'none';
                break;
            case '15000-20000':
                card.style.display = price >= 15000 && price <= 20000 ? 'block' : 'none';
                break;
            case 'over20000':
                card.style.display = price > 20000 ? 'block' : 'none';
                break;
            default:
                card.style.display = 'block';
        }
    });
}

// 메뉴 정렬 기능
function sortMenu(sortBy) {
    const menuContainer = document.querySelector('.menu-grid');
    const menuCards = Array.from(menuContainer.querySelectorAll('.menu-card'));
    
    menuCards.sort((a, b) => {
        if (sortBy === 'price') {
            const priceA = parseInt(a.querySelector('.price').textContent.replace(/[^0-9]/g, ''));
            const priceB = parseInt(b.querySelector('.price').textContent.replace(/[^0-9]/g, ''));
            return priceA - priceB;
        } else if (sortBy === 'name') {
            const nameA = a.querySelector('h3').textContent;
            const nameB = b.querySelector('h3').textContent;
            return nameA.localeCompare(nameB);
        }
    });
    
    menuCards.forEach(card => menuContainer.appendChild(card));
} 