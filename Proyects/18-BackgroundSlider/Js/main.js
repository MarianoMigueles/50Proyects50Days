const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('prev-button');

const slides = document.querySelectorAll('.slide');
const body = document.querySelector('body');

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    changeBGImgBody();
    addActiveClassToSlide();
});

prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length;
    }

    changeBGImgBody();
    addActiveClassToSlide();
});

function changeBGImgBody() {
    body.style.backgroundImage = slides[currentSlide].style.backgroundImage;
}

function addActiveClassToSlide() {
    slides.forEach(slide => { slide.classList.remove('active'); });
    slides[currentSlide].classList.add('active');
}