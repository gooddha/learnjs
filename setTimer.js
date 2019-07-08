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