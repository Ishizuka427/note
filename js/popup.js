const textareaElement = document.querySelector('#note');

textareaElement.addEventListener('change', (event) => {
  document.cookie = event.target.value;
});
