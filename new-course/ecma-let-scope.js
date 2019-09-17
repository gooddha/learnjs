// https://m.habr.com/ru/post/462971/ Использование let объявлений переменных и особенности образуемых при этом замыканий в JavaScript

/*let func1 = [];

for (var i = 0; i < 3; i++) {
	func1.push(function(i) { return function() { console.log(i); } }(i));
}

func1.forEach(function(func) { func(); });

/*
В консоли получим

0 newECMA6add.js:4:59
1 newECMA6add.js:4:59
2 newECMA6add.js:4:59
*/

// или можно обойтись без них используя let:
/*
let func1 = [];

for (let i = 0; i < 3; i++) {
	func1.push(function() { console.log(i); });
}

func1.forEach(function(func) { func(); });

/*
В консоли также получим

0 newECMA6add.js:4:37
1 newECMA6add.js:4:37
2 newECMA6add.js:4:37
*/
/*
let func1 = [];

for (var i = 0; i < 3; i++) {
	func1.push(function(i) { return function() { console.log(i); } }(i));
	++i;
}

func1.forEach(function(func) { func(); });

/*
В консоли получим

0 newECMA6add.js:4:59
2 newECMA6add.js:4:59
*/
/*
let func1 = [];

for (let i = 0; i < 3; i++) {
	func1.push(function() { console.log(i); });
	++i;
}

func1.forEach(function(func) { func(); });

/*
В консоли получим

1 newECMA6add.js:4:37
3 newECMA6add.js:4:37
*/
/*
let func1 = [],
	func2 = [];

for (var i = 0; i < 3; i++) {
	func2.push(function() { console.log(++i); });
	func1.push(function() { console.log(++i); });
	++i;
}

func1.forEach(function(func) { func(); });
func2.forEach(function(func) { func(); });

/*
В консоли получим

5 newECMA6add.js:6:37
6 newECMA6add.js:6:37
7 newECMA6add.js:5:37
8 newECMA6add.js:5:37

*/
/*
let func1 = [],
	func2 = [];

function test() {
	for (var i = 0; i < 3; i++) {
		func2.push(function() { console.log(++i); });
		func1.push(function() { console.log(++i); });
		++i;
	}
}
test();

func2.forEach(function(func) { func(); });
func1.forEach(function(func) { func(); });

/*
В консоли также получим

5 newECMA6add.js:7:41
6 newECMA6add.js:7:41
7 newECMA6add.js:6:41
8 newECMA6add.js:6:41

*/
/*
let func1 = [],
	func2 = [];

for (var i = 0; i < 3; i++) {
	func2.push(function(i) { return function() { console.log(++i); } }(i));
	func1.push(function(i) { return function() { console.log(++i); } }(i));
	++i;
}

func1.forEach(function(func) { func(); });
func2.forEach(function(func) { func(); });

/*
В консоли получим

1 newECMA6add.js:6:56
3 newECMA6add.js:6:56
1 newECMA6add.js:5:56
3 newECMA6add.js:5:56
*/
/*
let func1 = [],
	func2 = [];

for (var i = 0; i < 3; i++) {
	func2.push(function(i) { return function() { console.log(i); } }(++i));
	func1.push(function(i) { return function() { console.log(i); } }(++i));
	++i;
}

func1.forEach(function(func) { func(); });
func2.forEach(function(func) { func(); });

/*
В консоли получим

2 newECMA6add.js:6:56
1 newECMA6add.js:5:56
*/

/*
let func1 = [],
	func2 = [];

for (let i = 0; i < 3; i++) {
	func2.push(function() { console.log(++i); });
	func1.push(function() { console.log(++i); });
	++i;
}

func1.forEach(function(func) { func(); });
func2.forEach(function(func) { func(); });

/*
В консоли получим

2 newECMA6add.js:6:41
4 newECMA6add.js:6:41
3 newECMA6add.js:5:41
5 newECMA6add.js:5:41
*/

/*
let func1 = [];

{
	let i = 0;
	func1.push(function() { console.log(i); });
	++i;
}

func1.forEach(function(func) { func(); }); 
console.log(i);

/*
1 newECMA6add.js:5:34
ReferenceError: i is not definednewECMA6add.js:10:1
*/
/*
const start = Date.now();
var arr = [],
	func1 = [],
	func2 = [];

for (var i = 0; i < 100000; i++) {
	arr.push(Math.random());
}

for (var i = 0; i < 99999; i++) {
	var min = arr[i];
	var minind = i;

	for (var j = i + 1; j < 100000; j++) {
		if (min > arr[j]) {
			min = arr[j];
			minind = j;
		}
	}

	var temp = arr[i];
	arr[i] = arr[minind];
	arr[minind] = temp;
	func1.push(function(i) { return function() { return i; } }(arr[i]));
}
func1.push(function(i) { return function() { return i; } }(arr[99999]));

for (var i = 0; i < 100000; i++) {
	func2.push(func1[i]());
}

const end = Date.now();

console.log((end - start)/1000); // 9.847
*/

const start = Date.now();
let arr = [],
	func1 = [],
	func2 = [];

for (let i = 0; i < 100000; i++) {
	arr.push(Math.random());
}

for (let i = 0; i < 99999; i++) {
	let min = arr[i];
	let minind = i;

	for (let j = i + 1; j < 100000; j++) {
		if (min > arr[j]) {
			min = arr[j];
			minind = j;
		}
	}

	let temp = arr[i];
	arr[i] = arr[minind];
	arr[minind] = temp;
	func1.push(function() { return arr[i]; });
}
func1.push(function() { return arr[99999]; });

for (let i = 0; i < 100000; i++) {
	func2.push(func1[i]());
}

const end = Date.now();

console.log((end - start)/1000); // 5.3