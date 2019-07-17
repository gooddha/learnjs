alert = console.log;
function CoffeeMachine(power) {
    this.waterAmount = 0;
    let timerId;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        alert('Кофе готово!');
    }

    this.run = function () {
        alert('Кофеварка включена');
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function () {
        clearTimeout(timerId);
        alert('Кофеварка выключена');
    }

}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет