// https://learn.javascript.ru/oop-errors#unasleduyte-ot-syntaxerror
/*
Создайте ошибку FormatError, которая будет наследовать от встроенного класса SyntaxError.
Синтаксис для её создания– такой же, как обычно:
*/
alert = console.log;

function FormatError(message) {
    this.name = 'FormatError';
    this.message = message;
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = (new Error()).stack;
    }
}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;


var err = new FormatError("ошибка форматирования");

alert(err.message); // ошибка форматирования
alert(err.name); // FormatError
alert(err.stack); // стек на момент генерации ошибки

alert(err instanceof SyntaxError); // true