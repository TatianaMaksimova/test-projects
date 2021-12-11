// Замыкание. Когда доступ к переменной скрыт
const myLibFactory = function () {
  let value = 0;

  const add = function (num) {
    value += num;
  };

  return {
    add,
    getValue() {
      return value;
    },
  };
};

const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());
