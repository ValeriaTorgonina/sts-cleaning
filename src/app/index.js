import Swiper, { Navigation,  } from 'swiper';
import skrollr from 'skrollr';
import AOS from 'aos';
import './our-services';
import './stages';
import './menu';

Swiper.use([Navigation]);

const resultsSlider = new Swiper('.results__slider', {
    spaceBetween: 15,
    slidesPerView: 2,
    speed: 500,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        }, 
        400: {
            slidesPerView: 2
        }
    }
});

if(window.innerWidth > 768) {
    const scroll = skrollr.init();
}

AOS.init({
    disable: function() {
        const maxWidth = 768;
        return window.innerWidth < maxWidth;
    }
});