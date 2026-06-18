let drugData = [];

// 1. 模擬讀取或載入 JSON 資料
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        drugData = data;
        renderCards(drugData); // 初始化顯示所有藥品
    });

// 2. 渲染卡片的函式
function renderCards(drugs) {
    const container = document.getElementById('cardContainer');
    container.innerHTML = ''; // 清空舊內容
    
    drugs.forEach(drug => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${drug.name} <small style="color:gray">${drug.brand}</small></h3>
            <div><span class="tag">${drug.category}</span> <span class="tag">${drug.subcategory}</span></div>
            <p><strong>劑型：</strong>${drug.dosage}</p>
            <p><strong>適應症：</strong>${drug.indications}</p>
        `;
        container.appendChild(card);
    });
}

// 3. 監聽搜尋框輸入事件
document.getElementById('searchInput').addEventListener('input', function(e) {
    const keyword = e.target.value.toLowerCase();
    const filtered = drugData.filter(drug => {
        return drug.name.toLowerCase().includes(keyword) || 
               drug.brand.toLowerCase().includes(keyword) || 
               drug.indications.toLowerCase().includes(keyword);
    });
    renderCards(filtered);
});