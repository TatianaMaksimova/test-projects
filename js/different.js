/* console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log('' && 'Mango'); // false && true -> ''
console.log('Mango' && ''); // true && false -> ''
console.log('Mango' && 'Poly'); // true && true -> 'Poly'
console.log('Poly' && 'Mango'); // true && true -> 'Mango'
*/

'Циклы';

// i += 1;
// i = i + 1;

/* for (initialization; condition; post - expression) {
  // statements
} */

/* for (let i = 0; i <= 5; i += 1) {
  console.log(i);
}
console.log('Счетчик');

for (let i = 10; i >= 0; i -= 3) {
  console.log(i);
}
console.log('Счетчик2');
*/

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

//  переменные
/* const minSalary = 500;
const maxSalary = 5000;
const employees = 13;
let totalSalary = 0;
// перебрать работников в цикле
for (let i = 1; i <= employees; i += 1) {
  // сгенерить случаную зп
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`ЗП работника номер ${i} - ${salary}`);
  //  прибавить к тотал
  totalSalary += salary;
}
// лог
console.log('totalSalary: ', totalSalary);
*/

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

/* const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  // console.log(i);
  if (i % 2 !== 0) {
    // console.log('не четное ', i);
    continue;
  }

  console.log('четное ', i);
  total += i;
}

console.log('total ', total);

// console.log(19 % 2);
*/

('Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.');

/* const productName = 'Repair droid';
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}
*/

/* function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message <= message.maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength);
  }
  /// Change code above this line
  return result;
}

formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);
*/

('Break, Continue');

/* for (let i = 0; i <= 20; i += 1) {
  console.log(i);

  if (i === 10) {
    console.log('Нашли число 10, прерываем выполнение цикла.');
    break;
  }
}

console.log('Лог после цикла');
*/

/* const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 1) {
    continue;
  }
  console.log('Четное i: ', i);
}
*/
