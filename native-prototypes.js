var alert = console.log;
// http://learn.javascript.ru/native-prototypes#dobavit-funktsiyam-defer
/*
Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.
После этого должен работать такой код:
*/

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// }

alert('start');

// function f() {
//   alert( "привет" );
// }

// f.defer(1000); // выведет "привет" через 1 секунду

Function.prototype.deferArgs = function(ms) {
    var f = this;

    return function () {
        var args = arguments;
        var context = this;
        setTimeout(function() {
            f.apply(context, args);
        }, ms);
    }
}

function f1(a, b) {
  alert( a + b );
}

f1.deferArgs(1000)(1, 2); // выведет 3 через 1 секунду.
