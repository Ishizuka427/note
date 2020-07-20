const textareaElement = document.querySelector('#note');

textareaElement.addEventListener('change', (event) => {
const encodedValue = escape(event.target.value);
document.cookie = `note=${encodedValue}`;
});

textareaElement.value = unescape(Cookies.get('note') || '');
