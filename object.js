/*
http://learn.javascript.ru/object
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.dir(user);
*/
// ------------------------------------------------------------------------------------

/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:

let alert = console.log;
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }

    return true;
}

*/
// ------------------------------------------------------------------------------------
/*
У нас есть объект, в котором хранятся зарплаты нашей команды
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let person in salaries) {
    sum += salaries[person];
}

console.log(sum);
*/
// ------------------------------------------------------------------------------------

/*
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
console.dir(menu);

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
