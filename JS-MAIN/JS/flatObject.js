const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}
console.log(flattenObject(obj));


// function flattenObject(obj, parent = "") {
//   return Object.keys(obj).reduce((acc, key) => {
//     const newKey = parent ? `${parent}.${key}` : key;

//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       Object.assign(acc, flattenObject(obj[key], newKey));
//     } else {
//       acc[newKey] = obj[key];
//     }

//     return acc;
//   }, {});
// }
