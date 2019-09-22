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

/*http://learn.javascript.ru/date#poslednee-chislo-mesyatsa
Последнее число месяца?
важность: 5
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.

function getLastDayOfMonth(year, month) {
    
    let date = new Date(year, month + 1, 0);
    console.log(date.getDate());
}

getLastDayOfMonth(2012, 1) // 29 (високосный год, февраль).
*/

/*http://learn.javascript.ru/date#skolko-segodnya-proshlo-sekund
Сколько сегодня прошло секунд?
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let today = new Date()
    today.setHours(0, 0, 0, 0);
    return (Date.now() - today) / 1000;
}

alert(getSecondsToday());
*/

/*http://learn.javascript.ru/date#skolko-sekund-ostalos-do-zavtra
Сколько секунд осталось до завтра?
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Например, если сейчас 23:00, то:
getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    let secondsLeft = Math.round( (tomorrow - now)/1000 );
    
    return secondsLeft;
}

alert(getSecondsToTomorrow());
*/

/*http://learn.javascript.ru/date#formatirovanie-otnositelnoy-daty
Форматирование относительной даты
Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

function formatDate(date) {
    switch(date) {
        case 
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );