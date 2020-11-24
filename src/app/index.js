import Swiper, { Navigation } from 'swiper';
import skrollr from 'skrollr';
import './our-services';
import './stages';
import './menu';

Swiper.use([Navigation]);

const mySwiper = new Swiper('.results__slider', {
    spaceBetween: 15,
    slidesPerView: 2,
    speed: 500,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


if(window.innerWidth > 768) {
    const scroll = skrollr.init();
}
