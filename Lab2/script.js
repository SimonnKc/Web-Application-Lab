// console.log(a);
// console.log(b);
// console.log(c);

// var a = 10;
// let b = 20;
// const c = 30;

const produce = ["apple", "banana", "mango", "orange", "grape"];

// Task: Print every element in the array

// for(let item of produce)
//     console.log(item)

// ARROW SYNTAX
// const fnName = () => {}

// const printEvenIndex = (arr) => {
//   for (let idx = 0; idx < arr.length; idx++) {
//     if (idx % 2 === 0) {
//       console.log(arr[idx]);
//     }
//   }
// };

// printEvenIndex(produce)

// MAP METHOD
// const upperItems = produce.map((item) => {
//  item.toUpperCase()
// });

// console.log(upperItems);

const digits = [1, 10, 20, 30, 40];

// FILTER METHOD
// digits.filter((num) => {
//   if (num < 20)
//     console.log(num);
// });

// produce.filter((val, pos) => {
//     if(pos % 2 === 0)
//         console.log(val)
// })

// console.log(produce)
// console.log(...produce) 

const merged = [...produce, ...digits];
console.log(merged);