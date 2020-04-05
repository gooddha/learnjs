let alert = console.log;
// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let generator = generateSequence();

// for(let value of generator) {
//   alert(value); // 1, затем 2, затем 3
// }

// function* generateSequence(start, end) {
//   for (let i = start; i <= end; i++) yield i;
// }

// let sequence = generateSequence(1,5);

// console.log(sequence.next())
// console.log(sequence.next())
// console.log(sequence.next())
// console.log(sequence.next())
// console.log(sequence.next())
// console.log(sequence.next())
// console.log(sequence.next())


// function* gen() {
//   // Передаём вопрос во внешний код и ожидаем ответа
//   let result = yield "2 + 2 = ?"; // (*)

//   alert(result);
// }

// let generator = gen();

// let question = generator.next().value; // <-- yield возвращает значение

// let num = prompt(question);

// generator.next(num); // --> передаём результат в генератор


// https://learn.javascript.ru/generators#psevdosluchaynyy-generator
// Псевдослучайный генератор

function* pseudoRandom(seed) {
  let prev = seed;

  while(true) {
    result = prev * 16807 % 2147483647
    yield result;
    prev = result;
  }

}

let generator = pseudoRandom(1);


for(let randomValue of generator) {
  alert(randomValue); // 16807
}


