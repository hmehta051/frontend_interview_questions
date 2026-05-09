const p1 = new Promise((resolve) => resolve("Promise 1"));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 3000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3")));
const p4 = new Promise((_, reject) => setTimeout(() => reject("Promise 4")));

const promiseArr = [p1, p2, p3, p4];

Promise.myAll = (promises) => {
  return new Promise((resolve, reject) => {
    const output = [];
    let remaining = promises.length;
    let rejected = false;

    if (remaining === 0) {
      resolve(output);
      return;
    }

    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((value) => {
          output[idx] = value;
        })
        .catch((err) => {
          rejected = true;
          reject(err);
        })
        .finally(() => {
          remaining--;
          // was: no rejected guard — resolve could fire after reject with partial output
          if (remaining === 0 && !rejected) {
            resolve(output);
          }
        });
    });
  });
};

Promise.myAll(promiseArr)
  .then((res) => console.log(res))
  .catch((err) => console.log("Rejected:", err))
  .finally(() => console.log("done"));
