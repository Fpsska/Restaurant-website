const burgerButton = document.getElementById('burger-menu');
const burgerButtonClose = document.getElementById('burger-menu_close');
const burgerMenu = document.querySelector('.nav_mobile');

const header = document.querySelector('.header');

// /. variables

burgerButton.addEventListener('click', () => {
    burgerButton.classList.add('hidden');
    burgerButtonClose.classList.remove('hidden');
    burgerMenu.classList.add('visible');
    document.body.style.overflow = 'hidden';
});

burgerButtonClose.addEventListener('click', () => {
    burgerButtonClose.classList.add('hidden');
    burgerButton.classList.remove('hidden');
    burgerMenu.classList.remove('visible');
    document.body.style.overflow = 'auto';
});

const resetAllElState = () => {
    burgerMenu.classList.remove('visible');
    burgerButton.classList.remove('hidden');
    burgerButtonClose.classList.remove('hidden');
    document.body.style.overflow = 'auto';
};

window.addEventListener('resize', () => {
    const validCondition =
        burgerMenu.classList.contains('visible') && window.innerWidth >= 960;
    validCondition && resetAllElState();
});

document.addEventListener('keydown', e => {
    const validCondition =
        burgerMenu.classList.contains('visible') && e.code === 'Escape';
    validCondition && resetAllElState();
});

// /. logic of show/hide burger-menu, nav_mobile

window.addEventListener('scroll', e => {
    const { height } = window.getComputedStyle(header);

    const validCondition =
        !burgerMenu.classList.contains('visible') &&
        window.scrollY > parseInt(height, 10);

    if (validCondition) {
        burgerButton.classList.add('dark');
    } else {
        burgerButton.classList.remove('dark');
    }
});

// /. logic of change color of burger-menu
