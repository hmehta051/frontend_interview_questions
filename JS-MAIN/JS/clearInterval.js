const runFunc = () => {
  let a = true;
  let b = 0;
  setTimeout(() => {
    a = false;
  }, 2000);

  const id = setInterval(() => {
    if (a) {
      console.log(b++);
    } else {
      clearInterval(id);
    }
  }, 200);

  console.log("One");
};

runFunc();
console.log("Two");

// const printNumber = () => {
//   let count = 1;
//   let id = setInterval(() => {
//     if (count > 10) {
//       clearInterval(id);
//     } else {
//       console.log(count);
//     }

//     count++;
//   }, 1000);
// };

// printNumber();
