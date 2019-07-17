alert = console.log; //this is for debugging in nodejs

/* 
https://learn.javascript.ru/getters-setters#napisat-obekt-s-getterami-i-setterami

Напишите конструктор User для создания объектов:

С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.



function User() {
    var firstName, surName;

    this.setFirstName = function(newFirstName) {
        firstName = newFirstName;
    }

    this.setSurname = function (newSurName) {
        surName = newSurName;
    }

    this.getFullName = function() {
        return firstName + " " + surName;
    }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert(user.getFullName()); // Петя Иванов
*/

/*
https://learn.javascript.ru/getters-setters#dobavit-getter-dlya-power
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.


function CoffeeMachine(power, capacity) {
    
    this.getPower = function () {
        return power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    };

}

*/


/*
https://learn.javascript.ru/getters-setters#dobavit-publichnyy-metod-kofevarke
---------------------------------------------------------------------------------------------------------------------------------------------------------------
Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.

При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.


function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            console.log(amount);
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function () {
        setTimeout(onReady, getTimeToBoil());
    };

    this.addWater = function(newWater) {
        this.setWaterAmount(waterAmount + newWater);
    }

}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();
*/


/*
https://learn.javascript.ru/getters-setters#sozdat-setter-dlya-onready
Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.
Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде.
Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady, вот так:

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();

P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.
P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до, но и после запуска кофеварки, то есть чтобы функцию onReady можно было изменить в любой момент до её срабатывания.


function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            console.log(amount);
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    }

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function () {
        setTimeout(function() { onReady() }, getTimeToBoil());
    };

    this.addWater = function (newWater) {
        this.setWaterAmount(waterAmount + newWater);
    };

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    }

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);


coffeeMachine.setOnReady(function () {
    var amount = coffeeMachine.getWaterAmount();
    alert('Готов кофе: ' + amount + 'мл'); // Кофе готов: 150 мл
});

coffeeMachine.run();

*/


/*
https://learn.javascript.ru/getters-setters#dobavit-metod-isrunning

Добавить метод isRunning
Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.
Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она запущена и false, если нет.




function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var isRunning = false;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            console.log(amount);
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function () {
        return waterAmount;
    }

    function onReady() {
        alert('Кофе готов!');
    }

    this.run = function () {
        isRunning = true;
        setTimeout(function () { 
            isRunning = false;
            onReady();            
        }, getTimeToBoil());
    };

    this.addWater = function (newWater) {
        this.setWaterAmount(waterAmount + newWater);
    };

    this.setOnReady = function (newOnReady) {
        onReady = newOnReady;
    }

    this.isRunning = function() {
        return isRunning;
    }

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert('До: ' + coffeeMachine.isRunning()); // До: false

coffeeMachine.run();
alert('В процессе: ' + coffeeMachine.isRunning()); // В процессе: true

coffeeMachine.setOnReady(function () {
    alert("После: " + coffeeMachine.isRunning()); // После: false
});

*/

function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    

    this.waterAmount = function (amount) {
        // вызов без параметра, значит режим геттера, возвращаем свойство
        if (!arguments.length) return waterAmount;

        // иначе режим сеттера
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };


    console.log(this);
    console.log(waterAmount);
    console.log(this.waterAmount);

}

var coffeeMachine = new CoffeeMachine(1000, 500);

// пример использования
coffeeMachine.waterAmount(450);
alert(coffeeMachine.waterAmount()); // 450
