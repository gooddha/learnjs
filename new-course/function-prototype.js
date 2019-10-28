/* http://learn.javascript.ru/function-prototype#sozdayte-novyy-obekt-s-pomoschyu-uzhe-suschestvuyuschego
Создайте новый объект с помощью уже существующего

Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/
function Obj() {
  
}

Obj.prototype.prop = "test";
Obj.prototype = {};
let obj = new Obj;

let obj2 = new obj.constructor();

console.log(obj2.prop);