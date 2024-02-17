const textareaElement = document.querySelector('#note');

textareaElement.addEventListener('change', (event) => {
  const encodedValue = encodeURIComponent(event.target.value);
  document.cookie = `note=${encodedValue}`;
});

textareaElement.value = decodeURIComponent(Cookies.get('note') || '');
