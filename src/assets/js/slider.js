import Swiper, { Navigation } from 'swiper';

import '../libs/swiper.scss';

// /. imports

const swiper = new Swiper('.testimonials__slider', {
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

const gallerySwiper = new Swiper('.gallery__slider', {
    slidesPerView: 2.5,
    initialSlide: 1,
    spaceBetween: 30,
    centeredSlides: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

// /. slider configuration
