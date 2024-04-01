const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', onTextareaInput);

function handleSubmit(event) {
  event.preventDefault();
  if (
    form.elements.email.value.trim() !== '' &&
    form.elements.message.value.trim() !== ''
  ) {
    const send = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(send);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function onTextareaInput(event) {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedMessege = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessege) {
    form.elements.email.value = savedMessege.email;
    form.elements.message.value = savedMessege.message;
  }
}

populateTextarea();
