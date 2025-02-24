(() => {
    const refs = {
        formData: JSON.parse(localStorage.getItem('feedback-form-state')) || {
            email: '',
            message: '',
        },
        form: document.querySelector('.feedback-form'),
        storageKey: 'feedback-form-state'
    };

    refs.form.elements.message.value = refs.formData.message;
    refs.form.elements.email.value = refs.formData.email;

    function saveToLocal() {
        localStorage.setItem(refs.storageKey, JSON.stringify(refs.formData));
    }

    function handleInput(evt) {
        refs.formData[evt.target.name] = evt.target.value.trim();
        saveToLocal();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!refs.formData.email || !refs.formData.message) {
            alert('Fill please all fields');
            return;
        }
        console.log(refs.formData);
        localStorage.removeItem(refs.storageKey);
        refs.formData.email = '';
        refs.formData.message = '';
        refs.form.reset();
    }

    refs.form.addEventListener('input', handleInput);
    refs.form.addEventListener('submit', handleSubmit);
})();


//? Old style code
// const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
//     email: '',
//     message: '',
// };

// const form = document.querySelector('.feedback-form');
// form.elements.message.value = formData.message;
// form.elements.email.value = formData.email;
// const storageKey = 'feedback-form-state';

// form.addEventListener('input', (evt) => {
//     if (evt.target.name === 'email') {
//         formData.email = evt.target.value.trim();
//     }
//     if (evt.target.name === 'message') {
//         formData.message = evt.target.value.trim();
//     }
//     localStorage.setItem(storageKey, JSON.stringify(formData));
// });

// form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     if (!formData.email || !formData.message) {
//         alert('Fill please all fields');
//         return;
//     } 
//     console.log(JSON.parse(localStorage.getItem(storageKey)));
//     localStorage.removeItem(storageKey);
//     formData.email = '';
//     formData.message = '';
//     form.reset();
// });