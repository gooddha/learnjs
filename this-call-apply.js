function sumArgs() {
//using method borrowing
//   arguments.reduce = [].reduce;
//   return arguments.reduce((prev, next) => {
//       return prev + next;
//   });

//using call 
    return [].reduce.call(arguments, (a, b) => a + b);

//using apply
    // return [].reduce.apply(arguments, [(a, b) => a + b]);
}

// console.log( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива



  // ...Ваш код...
//   function applyAll() {
    // const func = arguments[0];
    // const args = [].slice.call(arguments, 1, arguments.length);
    // console.log(func, args);
    
    // return func(args);
    
//   }
function applyAll(func) {
    return func.apply(global, [].slice.call(arguments, 1));
}

 
console.log(applyAll(sumArgs, 1, 2, 3));


