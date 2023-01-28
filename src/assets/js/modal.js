import { makePostRequest } from './rest';

// /. imports

const reserveButton = document.querySelector('.header__button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__button');

const form = document.querySelector('.reserve-form');

const inputName = document.querySelector('.reserve-form__input_name');
const inputPhone = document.querySelector('.reserve-form__input_phone');
const inputPersonsQuantity = document.querySelector(
    '.reserve-form__input_persons'
);
const tableSelect = document.querySelector('.reserve-form__select_table');
const dateSelect = document.querySelector('.reserve-form__select_date');

// /. variables

reserveButton.addEventListener('click', () => {
    modal.classList.toggle('visible');
});

modalCloseButton.addEventListener('click', () => {
    modal.classList.remove('visible');
});

document.addEventListener('keydown', e => {
    // hide modal when press Escape key
    const validCondition =
        modal.classList.contains('visible') && e.code === 'Escape';
    validCondition && modal.classList.remove('visible');
});

document.addEventListener('click', e => {
    // hide modal when is clicked outside this element
    const isModalVisible = modal.classList.contains('visible');
    const validElements =
        modal.contains(e.target) || reserveButton.contains(e.target);

    if (isModalVisible && !validElements) {
        modal.classList.remove('visible');
    }
});

// /. modal

inputName?.addEventListener('input', function (e) {
    const validValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    this.value = validValue;
});

inputPhone?.addEventListener('input', function (e) {
    const validValue = e.target.value.replace(/[^0-9\s]/g, '');
    this.value = validValue;
});

inputPersonsQuantity?.addEventListener('input', function (e) {
    const validValue = e.target.value.replace(/[^0-9]/g, '');
    this.value = validValue;
});

form?.addEventListener('submit', e => {
    e.preventDefault();

    if (tableSelect.selectedIndex === 0 || dateSelect.selectedIndex === 0) {
        return;
    }

    const output = {
        name: inputName.value.trim(),
        phone: inputPhone.value.trim(),
        personsQuantity: inputPersonsQuantity.value.trim(),
        table: tableSelect.value.trim(),
        date: dateSelect.value.trim(),
        timeReseivedData: new Date().toISOString()
    };

    makePostRequest('https://jsonplaceholder.typicode.com/posts', output)
        .then(data => console.log(data))
        .catch(({ message }) =>
            console.error(`Error in makePostRequest promise: ${message}`)
        );

    form.reset();
});

// /. form
