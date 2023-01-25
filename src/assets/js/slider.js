import Swiper, { Navigation } from 'swiper';

import '../libs/swiper.scss';

// /. imports

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 60,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        slidesPerView: 1
    }
});

// /. slider configuration
