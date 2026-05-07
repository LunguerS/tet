const heroes = [ /* ... тот же массив, что был раньше ... */ ];

let currentHeroIndex = 0;
let likes = JSON.parse(localStorage.getItem('heroLikes')) || {0: 0, 1: 0};

function showHero(index) {
    currentHeroIndex = index;
    const hero = heroes[index];

    document.getElementById('main-page').classList.remove('active');
    const heroPage = document.getElementById('hero-page');

    document.getElementById('hero-name').textContent = hero.hero;
    document.getElementById('hero-owner').textContent = `Герой ${hero.owner}`;
    document.getElementById('hero-image').src = hero.image;
    document.getElementById('hero-work').textContent = hero.work;
    document.getElementById('hero-description').textContent = hero.description;
    document.getElementById('hero-link').href = hero.summaryLink;

    updateLikeButton();

    heroPage.classList.add('active');
}

function goBack() {
    document.getElementById('hero-page').classList.remove('active');
    document.getElementById('main-page').classList.add('active');
}

function toggleLike() {
    likes[currentHeroIndex]++;
    localStorage.setItem('heroLikes', JSON.stringify(likes));
    updateLikeButton();

    // Анимация
    const btn = document.getElementById('like-btn');
    btn.classList.add('liked');
    setTimeout(() => btn.classList.remove('liked'), 600);
}

function updateLikeButton() {
    const countEl = document.getElementById('like-count');
    const btn = document.getElementById('like-btn');
    countEl.textContent = likes[currentHeroIndex];

    if (likes[currentHeroIndex] > 0) {
        btn.classList.add('liked');
    }
}

// Модальное окно
function openModal() {
    document.getElementById('modal-image').src = document.getElementById('hero-image').src;
    document.getElementById('image-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('image-modal').style.display = 'none';
}

// Закрытие модалки по Esc и клику вне изображения
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const modal = document.getElementById('image-modal');
        if (modal.style.display === 'flex') closeModal();
        else if (document.getElementById('hero-page').classList.contains('active')) goBack();
    }
});

document.getElementById('image-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('image-modal')) closeModal();
});