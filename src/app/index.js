import services from './services';

const mySwiper = new Swiper('.results__slider', {
    spaceBetween: 15,
    slidesPerView: 2,
    speed: 500,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})