const images = document.getElementById('images');
const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const intro = document.getElementById('intro');
const introHead = document.getElementById('introHead');
const introPara = document.getElementById('introPara');
const introBtn = document.getElementById('introBtn');
const imagesArray = document.getElementsByClassName('image')
let counter = 0;

function nextImage() {
    counter++;
    if(counter === imagesArray.length) {
        counter = 0;
    }
}

function previousImage() {
    counter--;
    if (counter === -1){
        counter = imagesArray.length -1;
    }
}
function animation(checker) {
    imagesArray[counter].classList.replace('on', 'off');
    intro.classList.replace('intro-box-animation','intro-box-rm');
    introHead.classList.replace('introHead-animation','introHead-rm');
    introPara.classList.replace('introPara-animation','introPara-rm');
    introBtn.classList.replace('intro-Btn-animation','intro-Btn-rm');
    checker ? nextImage() : previousImage();
    imagesArray[counter].classList.replace('off', 'on');
    setTimeout(() => {
        intro.classList.replace('intro-box-rm', 'intro-box-animation');
    }, 1500);
    setTimeout(() => {
        introHead.classList.replace('introHead-rm', 'introHead-animation');
    }, 1800);
    setTimeout(() => {
        introPara.classList.replace('introPara-rm', 'introPara-animation');
    }, 2000);
    setTimeout(() => {
        introBtn.classList.replace('intro-Btn-rm', 'intro-Btn-animation');
    }, 2200);
}


nextBtn.addEventListener('click', () => {
    animation(true);
})
previousBtn.addEventListener('click', () => {
    animation(false);
})



