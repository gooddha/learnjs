/*
*   https: //learn.javascript.ru/exception#eval-kalkulyator-s-oshibkami
*   Напишите интерфейс, который принимает математическое выражение(в prompt) и выводит результат его вычисления через eval.
*   При ошибке нужно выводить сообщение и просить переввести выражение.
*   Ошибкой считается не только некорректное выражение, такое как 2 + , но и выражение, возвращающее NaN, например 0 / 0.
*/

let expr, res;

while (true) {
    expr = prompt("Enter expression to calculate", "2-");
    if (expr == null) break 

    try {
        res = eval(expr);
        if (isNaN(res)) {
            throw new Error("Result is undefined");
        } 

        break;
    } catch(e) {
        alert ("Error: " + e.message + ", repeat enter please")
    }
}

alert(res);


