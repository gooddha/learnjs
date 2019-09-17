let alert = console.log;
/*http://learn.javascript.ru/destructuring-assignment#destrukturiruyuschee-prisvaivanie
Деструктурирующее присваивание
У нас есть объект. Напишите деструктурирующее присваивание, которое:
свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:

let user = {
    name: "John",
    years: 30,
    //   isAdmin: true
};

// ваш код должен быть с левой стороны:
let { name, years: age, isAdmin = false } = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/

/*http://learn.javascript.ru/destructuring-assignment#maksimalnaya-zarplata
Максимальная зарплата
У нас есть объект salaries с зарплатами.
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

function topSalary(salaries) {
    let salariesArray = Object.entries(salaries);
    let topSalary = {
        name: '',
        value: 0
    };
    
    if (salariesArray.length == 0) return null;

    for (let [name, salary] of salariesArray) {
        if (salary > topSalary.value) {
            topSalary.name = name;
            topSalary.value = salary;
        }
    }

    return topSalary.name;

}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));