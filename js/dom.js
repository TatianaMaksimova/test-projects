// 1. console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// =======================================

// 2. const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// ===========================================

// 3;
// const image = document.querySelector('.image');

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute('src')); // true

// console.log(image.getAttribute('alt')); // "Lake and clouds"

// image.setAttribute('alt', 'Amazing nature');

// console.log(image.getAttribute('alt')); // Amazing nature

// ===========================================

// <!-- 4. из урока С.Репеты // Делаем кнопки для массива объектов -->
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

// const option = colorPickerOptions[0];

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   return buttonEl;
// });

// console.log(elements);

// но лучше сразу уметь писать функцию:

// const createColorPickerOptions = options => {
//   return options.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   });
// };

// const elements = createColorPickerOptions(colorPickerOptions);

// colorPickerContainerEl.append(...elements);

// ========5. Разметка=============================================================

// const product = {
//   name: 'Вафли',
//   description:
//     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi odio itaque quis qui, quia velit.',
//   price: 500,
//   available: true,
//   onSale: true,
// };

// Делаем разметку:
/* <article class="product">
  <h2 class="product-name"></h2>
  <p class="product-description"></p>
  <p class="product-price"></p>
</article>; */

// const productEl = document.createElement('article');

// const titleEl = document.createElement('h1');
// titleEl.textContent = product.name;
// titleEl.classList.add('product-name');

// const descriptEl = document.createElement('p');
// descriptEl.textContent = product.description;
// descriptEl.classList.add('product-description');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${product.price} руб.`;
// priceEl.classList.add('product-price');

// productEl.append(titleEl, descriptEl, priceEl);

// console.log(productEl);

// ======================6. Функция для создания карточки продукта==========================================
// import products from './data/products.js';
// console.log(products);

// const productsContainerEl = document.querySelector('.js-products');

// const makeProductsCard = ({ name, description, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const titleEl = document.createElement('h1');
//   titleEl.textContent = name;
//   titleEl.classList.add('product-name');

//   const descriptEl = document.createElement('p');
//   descriptEl.textContent = description;
//   descriptEl.classList.add('product-description');

//   const priceEl = document.createElement('p');
//   priceEl.textContent = `Цена: ${price} руб.`;
//   priceEl.classList.add('product-price');

//   productEl.append(titleEl, descriptEl, priceEl);

//   return productEl;
// };

// const elements = products.map(makeProductsCard);
// console.log(elements);

// productsContainerEl.append(...elements);

// 7. Транзакции================================================
import transactionHistory from './data/transactions.js';
console.log(transactionHistory);

const makeTransactionTableRowMarkup = ({ id, amount, date, business, type, name, account }) => {
  return `
  <tr>
    <th>${id}</th>
    <th>${amount}</th>
    <th>${date}</th>
    <th>${business}</th>
    <th>${type}</th>
    <th>${name}</th>
    <th>${account}</th>
  </tr>
  `;
};

const tableEl = document.querySelector('.js-transaction-table');

const makeTransactionTableRows = transactionHistory.map(makeTransactionTableRowMarkup).join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);
console.log(makeTransactionTableRows);
