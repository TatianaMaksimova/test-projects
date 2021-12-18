// Класс или конструктор. Функция вызывается в контексте уже созданного объекта.
const Person = function ({ head, arm, leg } = {}) {
  this.head = head;
  this.arm = arm;
  this.leg = leg;
};

// можно таким образом добавлять методы:
Person.prototype.changeLeg = function (newLeg) {
  this.leg = newLeg;
};

Person.description = 'Класс, описывающий части тела';

// Экземпляр. Создается пустой объект.
const myFirstPerson = new Person({
  head: 23,
  arm: 34,
  leg: 12,
});
// console.log(myFirstPerson);

const mySecondPerson = new Person({
  head: 34,
  arm: 21,
  leg: 32,
});
// console.log(mySecondPerson);

// =======================КЛАССЫ===============================
class Car1 {
  static description = 'Класс, описывающий автомобиль';

  static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj);
  }
  //   #test = 'test';
  //   mySuperPublicField = 555;

  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this._model = model;
    this._price = price;
  }

  // методы:
  //   changePrice(newPrice) {
  //     this.price = newPrice;
  //     // console.log(this.#test);
  //   }

  //   setModel(newModel) {
  //     this.model = newModel;
  //   }
  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  //   getModel() {
  //     return this.model;
  //   }
}

// console.dir(Car1);
// console.dir(Car1.description);

const firstCar = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

// console.log(firstCar);

// Car1.logInfo(firstCar);
// console.log(Object.getPrototypeOf(firstCar));
// console.log(Object.getPrototypeOf(firstCar) === Car1.prototype);
// firstCar.changePrice(1000); - обращение к приватному свойству test
// console.log(firstCar.getModel()); - обращение к свойствам происходит через get, т.к. в будущем свойства и их значения могут измениться

// firstCar.setModel('Q5');
// console.log(firstCar.getModel());

console.log(firstCar);

// c сеттером и геттером теперь стало проще менять значение свойства, не вызывая функцию:
// чтобы перезаписать значение свойства нужно, для простых вещей используют:
firstCar.model = 'Q7';
console.log(firstCar.model);

firstCar.price = 75000;
console.log(firstCar.price);

class Car {
  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
  }
}

const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

audi.price = 49000;
// console.log(audi.price); // 49000

audi.price = 51000;
//
