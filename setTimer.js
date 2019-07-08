//setinterval https://learn.javascript.ru/settimeout-setinterval#vyvod-chisel-kazhdye-100-ms
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