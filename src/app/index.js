import services from './our-services';
import stages from './stages';
import Swiper, { Navigation } from 'swiper';
import skrollr from 'skrollr';
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
})

const scroll = skrollr.init();