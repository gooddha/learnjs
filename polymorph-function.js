const alert = console.log;

function formatDate(date) { 
    // date = new Date(date);
    // console.log(date);
    // return date.toLocaleString("ru", { day: '2-digit', month: '2-digit', year: '2-digit' });

    if (typeof date == 'number') {
        // перевести секунды в миллисекунды и преобразовать к Date
        date = new Date(date * 1000);
    } else if (typeof date == 'string') {
        // строка в стандартном формате автоматически будет разобрана в дату
        date = new Date(date);
    } else if (Array.isArray(date)) {
        date = new Date(date[0], date[1], date[2]);
    }
    // преобразования для поддержки полиморфизма завершены, 
    // теперь мы работаем с датой (форматируем её)
    console.log(date.toLocaleString);
    return date.toLocaleString("ru", { day: '2-digit', month: '2-digit', year: '2-digit' });
}

alert(formatDate('2011-10-02')); // 02.10.11
alert(formatDate(1234567890)); // 14.02.09
alert(formatDate([2014, 0, 1])); // 01.01.14
alert(formatDate(new Date(2014, 0, 1))); // 01.01.14