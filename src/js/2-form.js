const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');
form.elements.message.value = formData.message;
form.elements.email.value = formData.email;
const storageKey = 'feedback-form-state';

form.addEventListener('input', (evt) => {
    if (evt.target.name === 'email') {
        formData.email = evt.target.value.trim();
    }
    if (evt.target.name === 'message') {
        formData.message = evt.target.value.trim();
    }
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    } 
    console.log(JSON.parse(localStorage.getItem(storageKey)));
    localStorage.removeItem(storageKey);
    form.reset();
});

