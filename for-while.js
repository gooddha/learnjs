var alert = console.log;
// for (var i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// -------------------------------
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }
// -------------------------------
// let i = 0;
// while (i < 3) {
//     alert(`number ${i++}!`);
// }
// --------------------------------
// let input;
// do {
//     input = prompt('Enter number grater than 100', '0');
//     if (input < 100) alert('Enter again');
// } while (input < 100);
// -------------------------------
//for 10 simple numbers are 2,3,5,7
let num = 10; //prompt('Enter number:', '');

next:
for (let i = 2; i <= num; i++) {  
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            continue next;
        }
    }
    alert(i);
}

