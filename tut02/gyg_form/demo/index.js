const inputBox = document.querySelector('#input-box');
const textArea = document.querySelector('#text-area');
const form = document.querySelector('#form');

inputBox.addEventListener('blur', () =>{
  if (inputBox.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    textArea.value = 'Valid email address';
  } else {
    textArea.value = 'Invalid email address';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
});