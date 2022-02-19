const refs = {
  buttonEl: document.querySelector('.js-clear'),
  outputEl: document.querySelector('.js-output'),
};

window.addEventListener('keypress', onKeyPress);
refs.buttonEl.addEventListener('click', onClearOutput);

function onKeyPress(event) {
  // console.log(event.key);
  refs.outputEl.textContent += event.key;
}

function onClearOutput() {
  refs.outputEl.textContent = '';
}
