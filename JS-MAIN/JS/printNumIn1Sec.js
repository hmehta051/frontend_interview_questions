// const printNumIn1Sec = () => {
//   for (var i = 0; i < 10; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
// };
// printNumIn1Sec();

const printNumIn1Sec = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      i += 1;
      console.log(i);
    }, i * 1000);
  }
};
printNumIn1Sec();
