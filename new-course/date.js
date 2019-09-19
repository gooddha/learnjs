let alert = console.log;
/*http://learn.javascript.ru/date#sozdayte-datu
Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert.

alert( new Date(2012, 01, 20, 3, 12) );
*/

/*http://learn.javascript.ru/date#pokazhite-den-nedeli
Покажите день недели
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
    let weekDays = [ "ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    
    return weekDays[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/

/*http://learn.javascript.ru/date#den-nedeli-v-evropeyskoy-numeratsii
День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
function getLocalDay(date) {
    let day = date.getDay();
    return day == 0 ? 7 : day;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/

/*http://learn.javascript.ru/date#kakoy-den-mesyatsa-byl-mnogo-dney-nazad
Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях:
P.S. Функция не должна изменять переданный ей объект date.


function getDateAgo(date, days) {
    let date2 = new Date(date);
    date2.setDate(date2.getDate() - days);
    return date2.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
*/