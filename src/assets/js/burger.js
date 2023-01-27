const burgerButton = document.getElementById('burger-menu');
const burgerButtonClose = document.getElementById('burger-menu_close');
const burgerMenu = document.querySelector('.nav_mobile');

// /. variables

burgerButton.addEventListener('click', () => {
    burgerButton.classList.add('hidden');
    burgerButtonClose.classList.remove('hidden');
    burgerMenu.classList.add('visible');
});

burgerButtonClose.addEventListener('click', () => {
    burgerButtonClose.classList.add('hidden');
    burgerButton.classList.remove('hidden');
    burgerMenu.classList.remove('visible');
});

const resetAllElState = () => {
    burgerMenu.classList.remove('visible');
    burgerButton.classList.remove('hidden');
    burgerButtonClose.classList.remove('hidden');
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
