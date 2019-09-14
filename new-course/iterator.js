/*http://learn.javascript.ru/iterable
Взятие N
Функция integers создает бесконечный итератор, который продолжает производить целые числа вечно.

Нужно создать функцию take, которая оборачивает данный итератор в другой итератор,
останавливающийся по достижении n элементов.
*/

function integers() {
  let i = 0;
  return {
    next() { return {value: i++} },
    [Symbol.iterator]() { return this }
  }
}

function take(n, iter) {
  return {
    next() {
      let result = iter.next();
      if (result.value <= n) return { done: false, value: result.value }
      return {done: true}
    },
    [Symbol.iterator]() { return this }
  }
}


let iter = integers();

for (let elt of take(3, iter))  console.log(elt); // 0, 1, 2, 3