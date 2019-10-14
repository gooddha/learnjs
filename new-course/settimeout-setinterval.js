let alert = console.log;
/*
let timerId = setTimeout(function tick() {
  alert('tick');
  setTimeout(tick, 2000); // (*)
}, 2000);
*/

/* http://learn.javascript.ru/settimeout-setinterval#vyvod-kazhduyu-sekundu
Вывод каждую секунду

Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный setTimeout.
*/

function printNumbers(from, to) {
  let i = from;

  /* 
  let interval = setInterval(function(){    
    if (i <= to) {
      alert(i++);
    } else {
      clearInterval(interval);
    }
  }, 1000)
  */

  let timeout = setTimeout(function func(){
    if (i <= to) {
      alert(i++);
      setTimeout(func, 1000);      
    } else {
      clearTimeout(timeout);
    }

  }, 1000);

}

printNumbers(1,6);