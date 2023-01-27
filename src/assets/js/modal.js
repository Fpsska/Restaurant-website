const reserveButton = document.querySelector('.header__button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__button');

const form = document.querySelector('.reserve-form');
const formSubmitButton = document.querySelector('.reserve-form__button');

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
    //

    const output = {
        name: inputName.value,
        phone: inputPhone.value,
        personsQuantity: inputPersonsQuantity.value,
        table: tableSelect.value,
        date: dateSelect.value,
        timeReseivedData: new Date().toISOString()
    };

    console.log(output);

    form.reset();
});

// /. form

document.addEventListener('keydown', e => {
    const validCondition =
        modal.classList.contains('visible') && e.code === 'Escape';
    validCondition && modal.classList.remove('visible');
});
