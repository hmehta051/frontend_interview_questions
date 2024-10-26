// function x() {
//   let a = 100;
//   function y() {
//     let b = 200;
//     function z() {
//       console.log(a, b);
//     }
//     z();
//   }
//   y();
// }
// x();

//INTERVIEW QUESTION ON CLOSURE
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// function y() {
//   for (var i = 1; i <= 5; i++) {
//     function close(t) {
//       setTimeout(() => {
//         console.log(t);
//       }, t * 1000);
//     }
//     close(i);
//   }
// }
// y();

//ADVANTAGES OF CLOSURE AND DISADVANTAGES OF CLOSURE

/*
ADVANTAGES
1. DATA HIDING AND ENCAPSULATION
2.MEMORIZE AND ONCE HOF
3.MODULE PATTERN
4. CURRYING
*/

/*
DISADVANTAGES
1. MEMORY LEAKS
2. NOT A GARBAGE COLLECTED
3. OVER CONSUMPTION MEMORY
*/

//DATA HIDING 1ST EXAMPLE NOT SCALABLE

// function Counter() {
//   let _count = 0;

//   return function incrementCount() {
//     _count++;
//     console.log(_count);
//   };
// }

// let Counter1 = Counter();
// Counter1();
// Counter1();
// Counter1();
// let Counter2 = Counter();
// Counter2();

function Counter() {
  let _count = 0;

  this.incrementCount = function () {
    _count++;
    console.log(_count);
  };
  this.decrementCount = function () {
    _count--;
    console.log(_count);
  };
}

let count = new Counter();
count.incrementCount();
count.decrementCount();


