// const stars = 3;
// let price;

/* if (stars === 1) {
  price = 20;
} else if (stars === 2) {
  price = 30;
} else if (stars === 3) {
  price = 50;
} else if (stars === 4) {
  price = 70;
} else if (stars === 5) {
  price = 120;
} else {
  console.log('Такого количества звезд нет');
}
console.log(price);
*/

/* switch (stars) {
  case 1:
    price = 20;
    console.log('Сюда еще можно записать текст');
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  case 4:
    price = 70;
    break;

  case 5:
    price = 120;
    break;

  default:
    console.log('Такого количества звезд нет.');
}
console.log(price);
*/

/* 
if (stars === 1 || stars === 2) {
  price = 20;
} else if (stars === 3 || stars === 4) {
  price = 50;
} else if (stars === 5) {
  price = 120;
} else {
  console.log('Такого количества звезд нет');
}
console.log(price); 
*/

/* switch (stars) {
  case 1:
  case 2:
    price = 20;
    console.log('Сюда еще можно записать текст');
    break;

  case 3:
  case 4:
    price = 50;
    break;

  case 5:
    price = 120;
    break;

  default:
    console.log('Такого количества звезд нет.');
}
console.log(price); */

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

/* const option = 2;
let message = '';

switch (option) {
  case 1:
    message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе.';
    break;

  case 2:
    message = 'Курьер доставит заказ завтра с 9:00 до 18:00.';
    break;

  case 3:
    message = 'Посылка будет отправлена сегодня.';
    break;

  default:
    message = 'Вам перезвонит менеджер.';
}
console.log(message);
*/

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

/* let balance = 10000;
const payment = 2000;

console.log(
  `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
);

if (payment <= balance) {
  balance -= payment;
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log('На счету недостаточно средств для проведения операции!');
}
console.log('Операция завершена');
*/

// const firstSentanse =
//   'Support for them is good now and if you use a transpiler such as babel, you’ve likely been using them for some time.';
// console.log(firstSentanse.length);

// ==============Корзина продуктов=================
// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     // console.log(this.items);

//     for (const item of this.items) {
//       if (item.name === product.name) {
//         // console.log('Такой продукт уже есть', product.name);
//         // console.log(item);
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     // product.quantity = 1;
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];
//       // выше деструктуризация
//       if (productName === name) {
//         //  console.log('нашли такой продукт:', productName);
//         // console.log('индекс:', i);

//         items.splice(i, 1);
//       }
//     }

//     // for (let i = 0; i < this.items.length; i += 1) {
//     //    // console.log(this.items[i]);
//     //   const item = this.items[i];
//     //  if (productName === item.name) {
//     //     console.log('нашли такой продукт:', productName);
//     //   }
//     // }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     // console.log(this.items);
//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: 'яблоко', price: 50 });
// cart.add({ name: 'груша', price: 100 });
// cart.add({ name: 'бананы', price: 150 });
// cart.add({ name: 'бананы', price: 150 });
// cart.add({ name: 'слива', price: 200 });
// cart.add({ name: 'слива', price: 200 });
// cart.add({ name: 'слива', price: 200 });

// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('бананы');
// console.log(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// const getProductTotalPrice = function ({ price, quantity }) {
//   // return price * quantity;
// };
// console.log(getProductTotalPrice(cart.items[3]));

// ========================Задача=================================
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден, функция должна возвращать null.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (productName === product.name) {
      // console.log(product.price);
      return;
      // return product.price;
    }
  }
  // console.log(null);
  // return null;
}

getProductPrice('Radar');
// возвращает 1300.
getProductPrice('Grip');
// возвращает 1200.
getProductPrice('Scanner');
// возвращает 2700.
getProductPrice('Droid');
// возвращает 400.
getProductPrice('Engine');
// возвращает null.

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],

  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    // console.log(bookIndex);
    this.books.splice(bookIndex, 1, newName);

    // console.log(this.books);
  },
};

bookShelf.updateBook('Haze', 'Dungeon chronicles');
// значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

bookShelf.updateBook('The last kingdom', 'Dune');
// значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

// ==============================Задача: расширяем инвентарь (зелье)====================================
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    // console.log(this.potions);
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      // console.log(potion);
      if (potion.name === newPotion.name) {
        console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
        return;
      }
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      if (potionName === potions[i].name) {
        return potions.splice(i, 1);
      }
    }

    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;

    for (let i = 0; i < potions.length; i += 1) {
      if (oldName === potions[i].name) {
        potions[i].name = newName;
      }
    }
  },
};

// atTheOldToad.getPotions();
//  для исходного объекта возвращает[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// , в массиве potions последним элементом будет этот объект
// atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// , в массиве potions последним элементом будет этот объект
// Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода
// Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
//  массив potions не изменяется
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// , массив potions не изменяется
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// , возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
// , возвращает строку "Error! Potion Stone skin is already in your inventory!"

// atTheOldToad.removePotion('Dragon breath');
// , в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
// atTheOldToad.removePotion('Speed potion');
// , в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// , в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 }]
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// , в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// console.log(atTheOldToad.potions);

// ========================================Задача: склад=================================================================
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Объяви следующие методы класса:
// getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
// removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.

class Storage {
  constructor(items = []) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      if (itemToRemove === items[i]) {
        return items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ===============================Задача: конструктор строк=====================================
// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.
// Объяви следующие методы класса:
// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padBoth(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
builder.padStart('^');
// console.log(builder.getValue()); // "^."
builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="
