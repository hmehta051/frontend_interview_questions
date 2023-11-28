// const sleep = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// };
// sleep(2000);

// //ASYNC AWAIT NEEDED FOR SLEEP

// const waitTwoSec = async () => {
//   console.log("Wait for 2 second");
//   await sleep(2000);
//   console.log("2 Second over");
// };

// waitTwoSec();

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

const person = {
  name: "S. Tendehar",
  balance: 1500,
  deduct: async function (amount) {
    this.balance = this.balance - amount;
    console.log("wait for 2 second");
    await sleep(2000);
    return `${this.name} + ' has a balance of ' + ${this.balance}`;
  },
};

const waitTwoSec = async () => {
  const deduct = await person.deduct(400);
  console.log(deduct);
};
waitTwoSec();
