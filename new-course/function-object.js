let alert = console.dir;
/* http://learn.javascript.ru/function-object#ustanovka-i-umenshenie-znacheniya-schyotchika
Установка и уменьшение значения счётчика

Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
*/

/*  
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.get = function( ) {
    return count;
  }

  counter.set = function(value) {
    count = value;
  }

  counter.decrease = function() {
    count--;
  }


  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function(value) {
    counter.count = value;
  }

  counter.decrease = function() {
    counter.count--;
  }
  return counter;
}

let counter = makeCounter();
console.log(counter.get());
counter();
counter();
counter();
console.log(counter.get());
counter.set(10);
counter.decrease();
counter.decrease();
console.log(counter.get());
*/

/* http://learn.javascript.ru/function-object#summa-s-proizvolnym-kolichestvom-skobok
Сумма с произвольным количеством скобок

Напишите функцию sum, которая бы работала следующим образом:
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.
*/

let sum = function(firstValue) {
  let result = firstValue;
  
  function func(nextValue) {    
    result += nextValue;
    return func;
  }

  func.valueOf = function() {
    return result;
  }

  return func;
}

alert(sum(1)(2))             // 3
alert(sum(1)(2)(3))          // 6
alert(sum(6)(-1)(-2)(-3))    // 0
alert(sum(5)(-1)(2))         // 6
alert(sum(0)(1)(2)(3)(4)(5)) // 15