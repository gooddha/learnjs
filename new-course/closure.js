let alert = console.log;
/*
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?
function makeWorker() {
    let name = "Pete";
    
    return function() {
        alert(name);
    };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)
*/


/*http://learn.javascript.ru/closure#summa-s-pomoschyu-zamykaniy
Сумма с помощью замыканий

Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
Да, именно таким образом, используя двойные круглые скобки (не опечатка).

function sum(a) {
    return function(b) {
        return a + b;
    }
}

alert(sum(1)(2))// = 3
alert(sum(5)(-1))// = 4
*/

/*http://learn.javascript.ru/closure#filtratsiya-s-pomoschyu-funktsii
Фильтрация с помощью функции

У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
Сделайте набор «готовых к употреблению» фильтров:
inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:
arr.filter(inBetween(3,6)) – выбирает только значения межу 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
function inBetween(a, b) {
    return function(item) {
        return item >= a && item <= b;
    }
}

function inArray(array) {
    return function(item) {
        return array.includes(item);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
*/

/* http://learn.javascript.ru/closure#sortirovat-po-polyu
Сортировать по полю
У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
Обычный способ был бы таким:

// по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Можем ли мы сделать его короче, скажем, вот таким?

users.sort(byField('name'));
users.sort(byField('age'));
То есть, чтобы вместо функции, мы просто писали byField(fieldName).

Напишите функцию byField, которая может быть использована для этого.

function byField(fieldName) {
    return function(a, b) {
        return a[fieldName] > b[fieldName] ? 1 : -1;
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name')).forEach(item => alert(item));
users.sort(byField('age')).forEach(item => alert(item));
*/

/* http://learn.javascript.ru/closure#armiya-funktsiy
Армия функций

Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
*/

 function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
