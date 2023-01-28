import Swiper, { Navigation } from 'swiper';

import '../libs/swiper.scss';

// /. imports

const testimonialsSlider = new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    spaceBetween: 60,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const gallerySlider = new Swiper('.gallery__slider', {
    initialSlide: 1,
    spaceBetween: 30,
    centeredSlides: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 600px
        600: {
            slidesPerView: 1.3
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 1.2
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 1.5
        },
        // when window width is >= 1920px
        1920: {
            slidesPerView: 1.95
        }
    }
});

// /. slider configuration
