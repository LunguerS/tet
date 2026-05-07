const heroes = [
    {
        owner: "Радомир",
        hero: "Стивен Дедал",
        work: "Улисс — Джеймс Джойс",
        image: "https://comicvine.gamespot.com/a/uploads/scale_medium/11/111746/3161820-stephen-portrait-color.png",
        summaryLink: "#",
        description: "Стивен Дедал — один из главных героев романа «Улисс» Джеймса Джойса. Он является образованным, творческим и очень задумчивым человеком, который постоянно размышляет о жизни, искусстве, религии и человеческой свободе."
    },
    {
        owner: "Тимофей",
        hero: "Илья Обломов",
        work: "Обломов — Иван Гончаров",
        image: "https://avatars.mds.yandex.net/i?id=ec62bb983d464fce563b9177044accb879bfd8b3-5844149-images-thumbs&n=13",
        summaryLink: "#",
        description: "Илья Обломов — главный герой романа Ивана Гончарова «Обломов». Он добрый, спокойный и мечтательный человек, который не любит спешку и предпочитает проводить время дома."
    }
];

function showHero(index) {
    const hero = heroes[index];

    document.getElementById('main-page').classList.remove('active');
    const heroPage = document.getElementById('hero-page');

    document.getElementById('hero-name').textContent = hero.hero;
    document.getElementById('hero-owner').textContent = `Герой ${hero.owner}`;
    document.getElementById('hero-image').src = hero.image;
    document.getElementById('hero-work').textContent = hero.work;
    document.getElementById('hero-description').textContent = hero.description;
    document.getElementById('hero-link').href = hero.summaryLink;

    heroPage.classList.add('active');
}

function goBack() {
    document.getElementById('hero-page').classList.remove('active');
    document.getElementById('main-page').classList.add('active');
}