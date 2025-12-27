const showMore = document.getElementById('show-more');
const slides = document.getElementsByClassName("member-card");
const films = document.getElementsByClassName("films-list-item");

function checkWindowWidth() {
    if (window.innerWidth <= 550) {
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        let slideIndex = 1;
        showSlides(slideIndex);

        prev.addEventListener('click', () => changeSlides(-1));
        next.addEventListener('click', () => changeSlides(1));

        function changeSlides(n) {
            showSlides(slideIndex += n);
        };

        function showSlides(n) {
            let i;
        
            if (n > slides.length) {slideIndex = 1};

            if (n < 1) {slideIndex = slides.length};

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            };

            slides[slideIndex-1].style.display = "block";
        };
    } else {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "block";
        };
    }

    if (window.innerWidth <= 890) {
        let filmIndex = 2;
        
        for (let n = filmIndex; n < films.length; n++) {
            films[n].style.display = "none";
        };
        
        showMore.addEventListener('click', () => showFilms(filmIndex));
    } else {
        let filmIndex = 3;

        for (let n = filmIndex; n < films.length; n++) {
            films[n].style.display = "none";
        };

        showMore.addEventListener('click', () => showFilms(filmIndex));
    }
};

function showFilms(filmIndex) {
    console.log('click')

    for (let k = filmIndex; k < films.length; k++) {
        if (films[k].style.display === "none") {
            films[k].style.display = "flex";

            showMore.textContent = 'Скрыть показанные'
        } else {
            films[k].style.display = "none";

            showMore.textContent = 'Смотреть ещё'
        }
    };
};

checkWindowWidth();
window.addEventListener('resize', checkWindowWidth);