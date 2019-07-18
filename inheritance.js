var alert = console.log;

/*
https://learn.javascript.ru/functional-inheritance#zapuskat-tolko-pri-vklyuchyonnoy-kofevarke
Запускать только при включённой кофеварке
В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.
*/

function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };

}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var timerId;
    var waterAmount = 0;

    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

    var parentEnable = this.enable;
    this.enable = function () {
        parentEnable(); // теперь можно вызывать как угодно, this не важен
    }

    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable();
        clearTimeout( timerId );
    }

    this.run = function () {  
        if (this._enabled) {
            timerId = setTimeout(onReady, 1000);
        } else {
            console.log('Кофеварка не включена');
        }
    }

    function onReady() {
        alert('Кофе готово!');
    }

}

/*
var coffeeMachine1 = new CoffeeMachine(10000);
coffeeMachine1.run(); // ошибка, кофеварка выключена!

var coffeeMachine2 = new CoffeeMachine(10000);
coffeeMachine2.enable();
coffeeMachine2.run(); // ...Кофе готов!
*/

/*
https://learn.javascript.ru/functional-inheritance#ostanavlivat-kofevarku-pri-vyklyuchenii
Когда кофеварку выключают – текущая варка кофе должна останавливаться.
Например, следующий код кофе не сварит:


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
*/

/*
https://learn.javascript.ru/functional-inheritance#unasleduyte-holodilnik
Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():

Приватное свойство food хранит массив еды.
Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...) для добавления нескольких элементов сразу.
Если холодильник выключен, то добавить еду нельзя, будет ошибка.
Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе. При попытке добавить больше – будет ошибка
Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.


*/

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    var capacity = this._power / 100;

    var parentDisable = this.disable;
    this.disable = function() {
        
        if (food.length > 0) {
            console.log("Ошибка: нельзя отключить, в холодильнике есть еда");
        } else {
            parentDisable();
        }

    }

    this.addFood = function() {
        if (!this._enabled) { 
            console.log("Ошибка: нельзя добавить еду - холодильник выключен");
            return 
        }
        if (food.length + arguments.length > capacity) { 
            console.log("Ошибка: нельзя добавить еды больше " + capacity);
            return;
        }
        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);
        }
    }

    this.getFood = function() {
        return food.slice();
    }

    this.removeFood = function(item) {
        food.forEach((element, index) => {
            if (element == item) {
                food.splice(index, 1)
            }
        });
    }

    this.filterFood = function(func) {
        return food.filter(func);
    }

}

/*
var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен

// создать холодильник мощностью 500 (не более 5 еды)

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
alert(fridge.getFood());
var fridgeFood = fridge.getFood();


// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");
alert(fridgeFood); // котлета, сок, варенье


alert(fridge.getFood()); // внутри по-прежнему: котлета, сок, варенье
*/

/*
Добавьте в холодильник методы:
Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
Публичный метод removeFood(item), который удаляет еду item из холодильника.
*/
/*
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert(fridge.getFood().length); // 4

var dietItems = fridge.filterFood(function (item) {
    return item.calories < 50;
});

dietItems.forEach(function (item) {
    alert(item.title); // сок, зелень
    fridge.removeFood(item);
});

alert(fridge.getFood()); // 2
*/

// Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
alert(fridge.getFood())
fridge.disable(); // ошибка, в холодильнике есть еда