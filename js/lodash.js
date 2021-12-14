// console.log(_.isEmpty({ a: 1 }));

https://lodash.com/docs/4.17.15

// При подключенной ссылке lodash, его методы работают: 
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

const user = {
    name: 'mango',
    location: {
       city: 'moscow',
      },
  };

// 1. _.get - если такого свойства нет, то ошибку не вернет, просто underfind будет. 

// console.log(_.get(user, 'location.city'));

// 2. _.union - уникальные элементы в один массив распологает.
// _.unionBy - массив уникальных объектов;

// console.log(_.union([2, 4, 6], [6, 7, 8])); // [2, 4, 6, 7, 8]

// 3. _.range - массив чисел делает

// console.log(_.range(1, 5)); // [1, 2, 3, 4]

// 4. _.sortBy - сортирует по возрастанию, по чему угодно, что укажете;

// console.log(_.sortBy(users, user => user.age));

// 5. _.sum - считает общую сумму;
// _.sumBy - для массива объектов; 

// console.log(_.sum([1, 2, 3, 4, 5])); // 15
// console.log(_.sumBy(players, player => player.timePlayed));

// 6. _.uniq, _.uniqBy
// _.sortedUniq(), _.sortedUniqBy();

// 7. random()

// 8. min(), max(), minBy(), maxBy();

// сейчас делать можем так, раньше были другие методы..
// console.log(Math.min(...[1, 2, 3, 4, 5])); // 1

// console.log(_.minBy(players, player => player.timePlayed).name); - худшего игрока находят, для объектов

// 9. camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase(); 
// чтобы посмотреть что там под капотом, на сайте лодаш есть sourse, он выводит на гитхаб и описание работы под капотом данного метода