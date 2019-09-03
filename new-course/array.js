/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».


function sumInput() {
    let array = [];
    let sum = 0;
    let number = 0;

    while(true) {
        number = prompt('Enter number', '0');

        if (!isFinite(number) || number === '' || number === null) {
            break;
        } 

        array.push(+number);
    }
    
    for (let num of array) {
        sum += num;
    }
    return sum;
}

alert(sumInput());

*/

/*
Подмассив наибольшей суммы
------------------------------------------------------------------------------------------
http://learn.javascript.ru/array#podmassiv-naibolshey-summy

На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
*/

getMaxSubSum([-1, 2, 3, -9]) // 5
getMaxSubSum([2, -1, 2, 3, -9]) // 6
getMaxSubSum([-1, 2, 3, -9, 11]) // 11
getMaxSubSum([-2, -1, 1, 2]) // 3
getMaxSubSum([100, -9, 2, -3, 5]) // 100
getMaxSubSum([1, 2, 3]) // 6 (берём все)
getMaxSubSum([-1, -2, -3]) // 0

function getMaxSubSum(array) {
    let maxSum = 0;
    let partialSum = 0;
    
    for (let item of array) {
        partialSum += item;
        maxSum = Math.max(partialSum, maxSum);
        if (partialSum < 0) partialSum = 0;
    }
    
    console.log(maxSum);
    return maxSum;
}
