'Приведение к булю на примере Boolean(value)';
// console.log(Boolean(0));

'Логическое И - &&';
// console.log(5 && 8 && 9 && 'Hello');
// Все значения истинны, то вернется последняя строка.

// console.log(5 && false && 9 && 'Hello');
// Запинается на false и выводит это значение или последний операнд

'Логическое ИЛИ ||';
// запинается на true;
// возвращает то, на чем запнулось или последний операнд
// console.log(false || 5 || 56 || 'dsfdsjf');

'Логическое НЕ !';
// console.log(!1);

'Задача: напиши скрипт, который проверяет вхождение числа в отрезок обозначенный x1 и x2:';
/* До x1; После x2; от x1 до x2; до x1 или после x2 */
/* const x1 = 10;
const x2 = 40;
const number = 5;

console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);
const res1 = number > x1 && number < x2;
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}`, res1);
const res2 = number < x1 || number > x2;
console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}`, res2); */

'Задача: напиши скрипт, который проверяет возможность открыть чат с пользователем. Для этого пользователь должен быть другом, онлайн, без режима не беспокоить';
/* const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можно открыть чат?', canOpenChat); */

'Напиши скрипт проверки подписки пользователя при доступе к контенту. Есть три типа подписки: free, pro, vip. Доступ могут получить только последние два';
/* const sub = 'free';

const canAccessContent = sub === 'pro' || sub === 'vip';
console.log('Есть доступ к контенту?', canAccessContent); */

'Оператор ветвления';
/* if (true) {
  // тело. Если true, то выполняется условие. Если нет, то не выполнится, а выполнится уусловие которое ниже if
  console.log();
}
console.log(); */

/* if () {
    console.log();
} else {
    console.log();
} */

/* const salary = 1500;

if (salary <= 500) {
  console.log('уровень 1');
} else if (salary > 500 && salary <= 1500) {
  console.log('Уровень 2');
} else if (salary > 1500 && salary < 9000) {
  console.log('Уровень 3');
} else {
  console.log('уровень 4');
} */

'Тернарный оператор (Только если 2 варианта)';
// const balance = 1000;

/* let message;

 if (balance >= 0) {
  message = 'Позитивный баланс';
} else {
  message = 'Негативный баланс';
} */

// const message = условие ? выражение1 : выражение2;

/* const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';
console.log(message); */

/* function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;

  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }

  console.log(message);
  return message;
}

makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000); */

'Здесь несколько условий задачи';
/* function checkStorage(available, ordered) {
  let message;

  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }

  console.log(message);
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(70, 0);
checkStorage(200, 20);
checkStorage(200, 250);
checkStorage(150, 0); */
