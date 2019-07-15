//setinterval https://learn.javascript.ru/settimeout-setinterval#vyvod-chisel-kazhdye-100-ms
// -------------------------------------------------------------------------------------------------------------------------------
/*
function printNumbersInterval() {
    let i = 0;
    let interval = setInterval(() => {
        if (i <= 20) {
            console.log(i++);    
        } else { clearInterval(interval); }

    }, 100);    
}

printNumbersInterval();
*/





// https://learn.javascript.ru/settimeout-setinterval#vyvod-chisel-kazhdye-100-ms-cherez-settimeout
// -------------------------------------------------------------------------------------------------------------------------------
/*
function printNumbersRecursiveTimer() {
    let i = 0;
    function timer() {
        setTimeout(() => {
            if (i <= 20) {
                console.log(i++);
                setTimeout(timer, 100);
            } else { clearTimeout(timer); }

        }, 100);
    }

    timer();
}

printNumbersRecursiveTimer();
*/

// https://learn.javascript.ru/settimeout-setinterval#funktsiya-zaderzhka
// -------------------------------------------------------------------------------------------------------------------------------
/*
function delay(f, ms) {
    
    return function() { 
        let savedThis = this;
        let savedArgs = arguments;

        setTimeout(function() {
            f.apply(savedThis, savedArgs)
        }, ms);
    };
}

function f(x) {
    console.log(x);
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
*/

// https://learn.javascript.ru/settimeout-setinterval#vyzov-ne-chasche-chem-v-n-millisekund
// ---------------------------------------------------------------------------------------------------------------------------------------------
/*
function debounce(f, ms) {
    
    let timer = null;

    return function (...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(onComplete, ms);
    };
   

    
}

/* //решение в комментариях
debounce = (f, t) => {
    return function () {
        clearTimeout(this.timer);
        this.timer = setTimeout(f.bind(this, ...arguments), t);
    }
}
*/
/*
function func(n) { 
    console.log(n);
}

let f = debounce(func, 1000);

f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(1)

setTimeout(function () { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout(function () { f(4) }, 1200); // игнорируем вызов (3)
*/
// через 2200 мс от начала выполнения будет выполнен вызов f(4)



// https://learn.javascript.ru/settimeout-setinterval#tormozilka
// -------------------------------------------------------------------------------------------------------------------------------
function throttle(func, ms) {

    var isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}


var f = function (a) {
    console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)
this.clock.tick(1000);
this.clock.tick(100);
f1000(4); // (тормозим, с последнего вызова прошло 100 мс - менее 1000 мс)
this.clock.tick(100);
f1000(5); // (тормозим, с последнего вызова прошло 200 мс - менее 1000 мс)
this.clock.tick(700);
f1000(6); // (тормозим, с последнего вызова прошло 900 мс - менее 1000 мс)
this.clock.tick(100); // сработал вызов с 6


// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется

