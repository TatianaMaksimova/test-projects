// const age = 10;
// const isOpen = true;

// const type = typeof isOpen;

// Ввод пользователя.
// Методы window.confirm() и window.prompt();
// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// 'Введите количество товаров'
// const quantity = prompt('Введите количество товаров');
// console.log(quantity);

// prompt всегда делает тебе string, поэтому можно преобразовать его в число:
// let quantity = prompt('Введите количество товаров');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// Парс числа с Number.parseInt() и Number.parseFloat().
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);

// console.log(result);
// console.log(typeof result);
// let elementWidth = '40px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth', elementWidth);

// let elementHeight = '40.56px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight', elementHeight);

// let salary = 1300.8475645;
// salary = Number(salary.toFixed(2));
// // salary = Number(salary);

// console.log(salary);
// console.log(Number(salary.toFixed(2)));
// console.log(typeof salary);

('Приведение к числу с Number(value)');
// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity));
// console.log(typeof quantity);

// console.log(Number(value));
// console.log(typeof value);

// console.log(Math.PI);

// const base = 2;
// const power = 7;
// const result = Math.pow(base, power);
// console.log(result);
// 'или, более современный метод'
// console.log(2 ** 7);
// console.log(typeof result)

/* Задача: напиши скрипт который просит пользователя ввести 
число и степень, возводит число в эту степень и выводит 
результат в консоль.
*/
// попросить ввести число и сохранить в переменную
/* let base = prompt('Давай число');
base = Number(base);
console.log(base);
console.log(typeof base) */
// попросить ввести степень и сохранить в переменную
/* let power = prompt('Пиши степень');
power = Number(power);
console.log(power);
console.log(typeof power); */
// возвести введенные данные в степень и вывести результат в консоль
/* const result = base ** power;
console.log(result);
console.log(typeof result); */

/*
const max = 80;
const min = 40;

const result = Math.round(Math.random() * (max - min) + min);

console.log(result);
*/

('Длина строки, length');
// const message = 'В этой строке 26 символов.';

// console.log(message.length);

('Конкатенация строк');
// const firstName = 'Anna';
// const lastName = 'Vershina';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

('Напиши скрипт который выведет строку в формате: Гость x y поселяется в z номер q, подставив вместо x y z q значения переменных');
/* const firstName = 'Anna';
const lastName = 'Vershina';
const room = 450;
const type = 'VIP';

const order = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(order); */

/* const welcomeMsg =
  'Гость ' + firstName + ' ' + lastName + ' поселяется в ' + type + ' номер ' + room;
console.log(welcomeMsg); */
// старый формат, сейчас есть более новая версия написания.
// console.log(`fdsf sdfdsf sfdsdf ${5 + 5}`);

/* const quantity = 15;
const orderMsg = `Вы заказываете ${quantity} холодильников.`;
console.log(orderMsg); */

('Нормализация с методом toLowerCase() / Что ищем?');
/* let brand = 'SamSung';
brand = brand.toLowerCase();

console.log(brand); */

/* let brand = prompt('Давай бренд');
brand = brand.toLowerCase();
console.log(brand); */

('Записать одну букву из слова, или отрезать часть букв от слова');
// let brand = 'SamSuNg';
// console.log(brand[2]);
// console.log(brand.slice(2));

/* console.log(brand.slice(2).toLowerCase());
brand = brand[0].toLowerCase() + brand.slice(1).toLowerCase();
console.log(brand); */

('Поиск в строке методом includes()');
/* const blackListedWord1 = 'спам';
const blackListedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivemaster';

console.log(string1.includes(blackListedWord1));
console.log(string1.includes(blackListedWord2));

console.log(string2.includes(blackListedWord1));
const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blackListedWord2));

console.log(string3.includes(blackListedWord1));
console.log(string3.includes(blackListedWord2)); */
