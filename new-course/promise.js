let alert = console.log;
/* http://learn.javascript.ru/promise-basics#zaderzhka-na-promisah
Задержка на промисах
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

*/

function delay(ms) {
  // ваш код
  return new Promise(function(resolve){
    setTimeout(() => resolve(), ms);
  });
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));