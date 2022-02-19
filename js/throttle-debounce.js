const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

// window.addEventListener('mousemove', _.throttle(onMouseMove, 1500));

function onMouseMove(e) {
  mouseMoveCbInvocationCounter += 1;
  coordsOutputRef.textContent = `Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter}, X: ${e.clientX}, Y: ${e.clientY}`;
}

// throttle = затормаживает, для болтливых событий: скролл, изменение размеров окна, mousemove;
// debounce - отложенный поиск, ввод пользователя при поиске.

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

// inputRef.addEventListener('input', _.debounce(onInputChange, 3000));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
