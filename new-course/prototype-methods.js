let alert = console.log;
/* http://learn.javascript.ru/prototype-methods#dobavte-tostring-v-slovar
Добавьте toString в словарь

Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. 
Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
*/

let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
        value() { // значение -- это функция
            
            return Object.keys(this).join();
        }
    }
});




// добавляем немного данных
dictionary.apple = "Apple";
dictionary.prop = "Abra";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

console.log(Array.isArray(Object.keys(dictionary)));

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary.toString()); // "apple,__proto__"

