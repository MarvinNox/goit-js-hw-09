const formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');
form.elements.message.value = formData.message;
form.elements.email.value = formData.email;

form.addEventListener('input', (evt) => {
    if (evt.target.name === 'email') {
        formData.email = evt.target.value;
    }
    if (evt.target.name === 'message') {
        formData.message = (evt.target.value).trim();
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!(formData.email && formData.message)) {
        alert('Fill please all fields');
    } else {
        console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
        localStorage.removeItem('feedback-form-state');
        form.reset();
    }
});

