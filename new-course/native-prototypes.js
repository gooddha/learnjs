/* http://learn.javascript.ru/native-prototypes#dobavit-funktsiyam-metod-f-defer-ms
Добавить функциям метод "f.defer(ms)"

Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

console.log('start');  
f.defer(1000); // выведет "Hello!" через 1 секунду
*/

/* http://learn.javascript.ru/native-prototypes#dobavte-funktsiyam-dekoriruyuschiy-metod-defer
Добавьте функциям декорирующий метод "defer()"

Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.
*/

Function.prototype.defer = function(ms) {
  func = this;
  return function() {
    setTimeout(func, ms, ...arguments);
  }
};

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.