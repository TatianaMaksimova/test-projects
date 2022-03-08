import { books } from './data/forpractika.js';

const divEl = document.getElementById('root');

const divLeftEl = document.createElement('div');
const divRightEl = document.createElement('div');

divEl.append(divLeftEl, divRightEl);

divLeftEl.classList.add('divLeft');
divRightEl.classList.add('divRight');

const titleEl = document.createElement('h1');
titleEl.textContent = 'Библиотека';
divLeftEl.append(titleEl);

const listLeftEl = document.createElement('ul');
const btnAddLeftEl = document.createElement('button');
btnAddLeftEl.textContent = 'Добавить';

divLeftEl.append(listLeftEl, btnAddLeftEl);

function renderList() {
  const bookListMarkup = books
    .map(
      ({ title, id }) =>
        `<li id="${id}"><p class="bookName">${title}</p><button>Редактировать</button><button>Удалить</button></li>`,
    )
    .join('');
  listLeftEl.insertAdjacentHTML('afterbegin', bookListMarkup);

  const bookName = document.querySelectorAll('.bookName');
  bookName.forEach(el => el.addEventListener('click', onRenderPreview));
}

renderList();

function onRenderPreview(e) {
  const findBook = books.find(({ title }) => e.target.textContent === title);
  const markup = bookMarkup(findBook);
  divRightEl.innerHTML = '';
  divRightEl.insertAdjacentHTML('afterbegin', markup);
}

function bookMarkup({ title, author, img, plot }) {
  return `<div><h2>${title}</h2><p>${author}</p><img src="${img}" alt="Обложка книги ${title}"/><p>${plot}</p></div>`;
}

// function onEditBook(e) {}
