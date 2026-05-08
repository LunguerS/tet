const heroes = [

    {
        owner: "Радомир",
        hero: "Стивен Дедал",
        work: "Улисс — Джеймс Джойс",
        image: "./img/stephen.png",

        description:
            "Стивен Дедал — один из главных героев романа «Улисс» Джеймса Джойса. Он является образованным, творческим и очень задумчивым человеком, который постоянно размышляет о жизни, искусстве, религии и человеческой свободе."
    },

    {
        owner: "Тимофей",
        hero: "Илья Обломов",
        work: "Обломов — Иван Гончаров",
        image: "./img/oblomov.jpg",

        description:
            "Илья Обломов — главный герой романа Ивана Гончарова «Обломов». Он добрый, спокойный и мечтательный человек, который не любит спешку и предпочитает проводить время дома."
    },

    {
        owner: "Альмир",
        hero: "Монки Д. Луффи",
        work: "One Piece — Эйитиро Ода",
        image: "./img/luffy.png",

        description:
            "Монки Д. Луффи — главный герой манги и аниме One Piece. Он мечтает стать Королём пиратов и символизирует свободу, преданность друзьям и веру в мечту. Луффи отличается искренностью, огромной силой воли и готовностью защищать своих товарищей любой ценой."
    },

    {
        owner: "Альмир",
        hero: "Юрий Гречкин",
        work: "Философская научная фантастика",
        image: "./img/yuri.png",

        description:
            "Юрий Гречкин — герой-космонавт и философский персонаж, через которого раскрываются вопросы человеческой личности, сознания и технологического бессмертия."
    }
];

function showHero(index) {

    const hero = heroes[index];

    document.getElementById("main-page").classList.remove("active");

    const heroPage = document.getElementById("hero-page");

    document.getElementById("hero-name").textContent =
        hero.hero;

    document.getElementById("hero-owner").textContent =
        `Герой ${hero.owner}`;

    document.getElementById("hero-image").src =
        hero.image;

    document.getElementById("hero-work").textContent =
        hero.work;

    document.getElementById("hero-description").textContent =
        hero.description;

    heroPage.classList.add("active");
}

function goBack() {

    document.getElementById("hero-page")
        .classList.remove("active");

    document.getElementById("main-page")
        .classList.add("active");
}

function showAlmirHeroes() {

    document.getElementById("main-buttons")
        .classList.add("hidden");

    document.getElementById("almir-buttons")
        .classList.remove("hidden");
}

function backToMain() {

    document.getElementById("almir-buttons")
        .classList.add("hidden");

    document.getElementById("main-buttons")
        .classList.remove("hidden");
}