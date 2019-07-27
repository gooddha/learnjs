var alert = console.log;
// http://learn.javascript.ru/classes#perepishite-v-vide-klassa
// Есть класс CoffeeMachine, заданный в функциональном стиле.
// Задача: переписать CoffeeMachine в виде класса с использованием прототипа.

function CoffeeMachine1(power) {
    var waterAmount = 0;
  
    var WATER_HEAT_CAPACITY = 4200;
  
    function getTimeToBoil() {
      return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
  
    this.run = function() {
      setTimeout(function() {
        alert( 'Кофе готов!' );
      }, getTimeToBoil());
    };
  
    this.setWaterAmount = function(amount) {
      waterAmount = amount;
    };
  
}
// -----------------------------------------------------------------------------------------------------
function CoffeeMachine(power) {
    this.waterAmount = 0;
    this.power = power;    
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.getTimeToBoil = function() {
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
}

CoffeeMachine.prototype.run = function() {
    var self = this
    setTimeout(function() {
        alert( this.name, ': Кофе готов!' );
    }, this.getTimeToBoil());
}

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this.waterAmount = amount;
};
  
var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

var coffeeMachine2 = new CoffeeMachine(10000);
coffeeMachine2.setWaterAmount(70);
coffeeMachine2.run();

