/*
Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/
/*
let calculator = {
    read() {
      this.a = parseInt(prompt('Введите первое число', '0'));
      this.b = parseInt(prompt('Введите второе число', '0'));
    },
    sum() {
      return this.a + this.b;
    },
    mul(){
      return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  */
var alert = console.log;
 var name = "";

 var user = {
 name: "Василий",
 
 export: function() {
 return {
      name: "returned object",
      value: function() { return this.name}
 };
 }
 
 };
 
 alert( user.export().value() );