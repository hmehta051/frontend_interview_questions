function myPromise(executor) {
  let isRejected = false;
  let isFulfilled = false;
  let value;
  let error;
  let isCalled = false;
  let onResolve;
  let onReject;

  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === "function" && !isCalled) {
      isCalled = true;
      onReject(err);
    }
  }
  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      isCalled = true;
      onResolve(val);
    }
  }
  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFulfilled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      isCalled = true;
      onReject(error);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const examplePromise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

Promise.myAll = (promises) => {
  return new Promise((resolve, reject) => {
    let result = [];
    let countPromise = promises.length;
    if (countPromise === 0) {
      resolve(result);
      return;
    }
    promises.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          result[idx] = res;
          countPromise--;
          if (countPromise === 0) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
examplePromise.then((res) => console.log(res)).catch((err) => console.log(err));

// const promiseAll = (taskArray) => {
//   // return new Promise((resolve, reject) => {
//   //   const resArr = [];
//   //   let count = 0;
//   //   taskArray.forEach((promises, index) => {
//   //     count++;
//   //     promises
//   //       .then((data) => {
//   //         resArr[index] = data;
//   //         if (index === count) resolve(resArr);
//   //       })
//   //       .catch((err) => {
//   //         reject(err);
//   //       });
//   //   });
//   // });
//   // console.log(taskArray, "128");
//   return new Promise((resolve, reject) => {
//     const resArr = [];
//     let count = 0;
//     taskArray.forEach((promise, index) => {
//       promise
//         .then((data) => {
//           resArr[index] = data;
//           count++;
//           if (count === taskArray.length) {
//             resolve(resArr);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };

// Promise.all(taskArray)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
