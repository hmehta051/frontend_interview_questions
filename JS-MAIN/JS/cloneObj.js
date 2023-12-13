const originalObj = {
  a: 1,
  b: {
    c: 2,
  },
  func: function () {
    let x = 9;
    console.log(x);
  },
  date: new Date(),
};

// Inbuilt Method

const deepObj = structuredClone(originalObj);
console.log(deepObj);

// const shallowCopy = Object.assign({}, originalObj);
// const deepCloneCopy = JSON.parse(JSON.stringify(originalObj)); // First Way not Good data loss when function and method is present in object
// shallowCopy.b.c = 23;
// const deepCloneFunc = (obj) => {
//   if (typeof obj === null || typeof obj !== "object") {
//     return obj;
//   }
//   const clone = Array.isArray(obj) ? [] : {};

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       clone[key] = deepCloneFunc(obj[key]);
//     }
//   }
//   return clone;
// };
// const res = deepCloneFunc(originalObj);
// res.b.c = 56;
// console.log(originalObj, res);
