let alert = console.log;
/*http://learn.javascript.ru/map-set#filtratsiya-unikalnyh-elementov-massiva
Фильтрация уникальных элементов массива
Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
P.S. Здесь мы используем строки, но значения могут быть любого типа.
P.P.S. Используйте Set для хранения уникальных значений.



function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
*/

/*http://learn.javascript.ru/map-set#otfiltruyte-anagrammy
Отфильтруйте анаграммы
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:
nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

function aclean(arr) {
    let sortedStrings = {};

    for (let string of arr) {
        let sortedString = string.toLowerCase().split('').sort().join('');
        if (!sortedStrings[sortedString]) sortedStrings[sortedString] = string;
    }

    return Object.values(sortedStrings);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era" - Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

/*http://learn.javascript.ru/map-set#perebiraemye-klyuchi
Перебираемые ключи
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
Но это не выходит. Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
*/

let map = new Map();

map.set("name", "John");
let keys = Array.from(map.keys());
// Error: keys.push is not a function
keys.push("more");
