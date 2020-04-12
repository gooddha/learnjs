let alert = console.log;
// https://learn.javascript.ru/proxy#oshibka-pri-chtenii-nesuschestvuyuschego-svoystva
// Ошибка при чтении несуществующего свойства
// Обычно при чтении несуществующего свойства из объекта возвращается undefined.
// Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
// Это может помочь обнаружить программные ошибки пораньше.
// Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности.


// let user = {
//   name: "John"
// };

// function wrap(target) {
//   return new Proxy(target, {
//       get(target, prop, reciever) {
//         if (target[prop]) {
//           return target[prop]
//         } else {
//           throw new Error('Ошибка: такого свойства не существует')
//         }
//       }
//   });
// }

// user = wrap(user);

// alert(user.name); // John
// alert(user.age); // Ошибка: такого свойства не существует

// https://learn.javascript.ru/proxy#poluchenie-elementa-massiva-s-otritsatelnoy-pozitsii
// Получение элемента массива с отрицательной позиции
// В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.
// Другими словами, array[-N] – это то же, что и array[array.length - N].
// Создайте прокси, который реализовывал бы такое поведение.
// вся остальная функциональность массивов должна остаться без изменений


// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, prop, reciever) {
//     if (prop < 0) {
//       let reverseIndex = target.length + +prop;
//       return target[reverseIndex];
//     } else {
//       return target[prop];
//     }
//   }
// });

// alert( array[1] ); // 2
// alert( array[-1] ); // 3
// alert( array[-2] ); // 2

// https://learn.javascript.ru/proxy#observable
// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.
// Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.
// При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.
// P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом.


 function makeObservable(target) {
  target.observe = function(handler) {
    handler(key, value);
  }

  return new Proxy(target, {
    set(target, prop) {

    }
  })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John

