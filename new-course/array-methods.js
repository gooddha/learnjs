let alert = console.log; //to make posible run debug in node js

/*http://learn.javascript.ru/array-methods#perevedite-tekst-vida-border-left-width-v-borderleftwidth

Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

camelize("background-color")// 'backgroundColor';
camelize("list-style-image")// 'listStyleImage';
camelize("-webkit-transition")// 'WebkitTransition';

function camelize(str) {
    let words = str.split('-');
    
    words.forEach((element, index, array) => {
        if (index > 0) {
            array[index] = element[0].toUpperCase() + element.slice(1);
        }
    });

    console.log (words.join(''));
}
*/

/*http://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu
Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
Функция должна возвращать новый массив и не изменять исходный.

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)

function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}
*/

/*http://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu-na-meste
Фильтрация по диапазону "на месте"

Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // удалены числа вне диапазона 1..4

alert( arr2 ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, index) => {
        if (item < a || item > b) arr.splice(index,1); 
    });
}
*/

/*http://learn.javascript.ru/array-methods#sortirovat-v-obratnom-poryadke
Сортировать в обратном порядке

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10
*/

/*http://learn.javascript.ru/array-methods#skopirovat-i-otsortirovat-massiv
Скопировать и отсортировать массив
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.


function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

/*http://learn.javascript.ru/array-methods#sozdat-rasshiryaemyy-kalkulyator
Создать расширяемый калькулятор
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.

function Calculator() {
    this.methods = [];

    this.addMethod = function(name, func) {
        this.methods.push({name: name, func: func});
    };

    this.calculate = function(str) {
        let args = str.split(' ');
        let a = +args[0];
        let b = +args[2];
        let operator = args[1];        
        let result;
        
        if (isNaN(a) || isNaN(b)) return 'Error: One of the arguments is not a number';
        
        if (operator === '+') {
            action = (a, b) => a + b;
        } else if (operator === '-') {
            action = (a, b) => a - b;
        } else {
            action = this.methods.find((item) => item.name == operator).func;
        }
        result = action(a, b);
        
        return result
    };
    
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
alert( powerCalc.calculate("6 / 3") ); // 2
alert( powerCalc.calculate("6 * 3") ); // 16

*/

/*http://learn.javascript.ru/array-methods#transformirovat-v-massiv-imyon
Трансформировать в массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert( names ); // Вася, Петя, Маша
*/

/*http://learn.javascript.ru/array-methods#transformirovat-v-obekty
Трансформировать в объекты
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}));

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
*/

/*http://learn.javascript.ru/array-methods#otsortirovat-polzovateley-po-vozrastu
Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age)
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
*/

/*http://learn.javascript.ru/array-methods#peremeshayte-massiv
Перемешайте массив
важность: 3
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

function shuffle(arr) {
    alert (arr.sort((a, b) => Math.random() - 0.5));
}

let arr = [1, 2, 3];

shuffle(arr);
shuffle(arr);
shuffle(arr);
shuffle(arr);
*/

/*http://learn.javascript.ru/array-methods#poluchit-sredniy-vozrast
Получить средний возраст
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

function getAverageAge(arr) {
    return arr.reduce((sum, user) => sum + user.age, 0) / arr.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

/*http://learn.javascript.ru/array-methods#ostavit-unikalnye-elementy-massiva
Оставить уникальные элементы массива
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/

function unique(arr) {
    let result = [];
    
    arr.forEach(item => {
        if (!result.includes(item)) result.push(item);
    });

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O