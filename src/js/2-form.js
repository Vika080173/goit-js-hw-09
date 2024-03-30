const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');
populateTextarea();

form.addEventListener('submit', handleSubmit);
textarea.addEventListener('input', onTextareaInput);

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  const messege = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, messege);
}
function populateTextarea() {
  const savedMessege = localStorage.getItem(STORAGE_KEY);
  if (savedMessege) {
    textarea.value = savedMessege;
  }
}
