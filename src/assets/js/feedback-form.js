const form = document.querySelector('.feedback-form');
const inputName = document.querySelector('.feedback-form__input_name');
const inputEmail = document.querySelector('.feedback-form__input_email');
const inputEMessage = document.querySelector('.feedback-form__input_message');

// /. variables

inputName.addEventListener('input', function (e) {
    const validValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    this.value = validValue;
});

form.addEventListener('submit', e => {
    e.preventDefault();

    const output = {
        name: inputName.value.trim(),
        email: inputEmail.value.trim(),
        message: inputEMessage.value.trim(),
        timeReseivedData: new Date().toISOString()
    };
    console.log(output);

    form.reset();
});
