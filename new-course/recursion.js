let alert = console.log;
/*http://learn.javascript.ru/recursion#vychislit-summu-chisel-do-dannogo
Вычислить сумму чисел до данного

Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:
С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?


alert(sumTo(1)); //= 1
alert(sumTo(2)); //= 2 + 1 = 3
alert(sumTo(3)); //= 3 + 2 + 1 = 6
alert(sumTo(4)); //= 4 + 3 + 2 + 1 = 10
alert(sumTo(100)); //= 100 + 99 + ... + 2 + 1 = 5050
*/

// function sumTo(n) { 
    /* recursive realisation
    return (n == 1) ? n : n + sumTo(n - 1);
    */
   
   /* iterative realisation
   let sum = 0;
   
   for (let i = 1; i <= n; i++) {
       sum += i;
    }
    
    return sum;
    */
   
   /* arifmetic progression realisation
   return (n**2 + n) / 2;
   */
  
// }

/* http://learn.javascript.ru/recursion#vychislit-faktorial
Вычислить факториал

Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
Определение факториала можно записать как:
n! = n * (n - 1) * (n - 2) * ...*1
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
Примеры значений для разных n:
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
*/

/*
alert( factorial(5) ); // 120

function factorial(n) {
    if (n < 0) return "error: negative numer";

    if (n == 0 || n == 1 || n == 2 ) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(-5) ); // 120
*/

/*http://learn.javascript.ru/recursion#chisla-fibonachchi
Числа Фибоначчи

Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
Пример работы:
P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.
*/


// function fib(n) {
    // if (n < 0) return "error: negative number";
    /* recursive realisation
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fib(n - 2) + fib(n - 1);
    }*/

    /*iterative realisation
    let a = 1;
    let b = 1;
    
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
    */
// } 

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

/* http://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska
Вывод односвязного списка

Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.
Как лучше: с рекурсией или без?
*/

/* iterative realisation
function printList(list) {
    let tmp = list;
    
    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }
    
    /* recursive realisation
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
    
    
}

printList(list);
*/

/*http://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska-v-obratnom-poryadke
Вывод односвязного списка в обратном порядке

Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.
*/
function printListRev(list) {
    /* iterative realisation
    let tmp = list;
    let rev = [];

    while (tmp) {
        rev.push(tmp.value);
        tmp = tmp.next;
    }

    rev.reverse().forEach( value => alert(value));
    */

    /* recursive realisation
    */
    if (list.next) {
        printListRev(list.next);
    }

    alert(list.value);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printListRev(list);