const obj1 = {
  a: {
    b: {
      c: false,
      d: null,
      e: [
        1,
        2,
        3,
        {
          m: "hello",
        },
      ],
    },
  },
  k: null,
  b: {
    k: "name",
  },
};
const obj2 = {
  a: {
    b: {
      c: false,
      d: null,
      e: [
        1,
        2,
        3,
        {
          m: "hello",
        },
      ],
    },
  },
  k: null,
  b: {
    k: "name",
  },
};

function deepCompare(object1, object2) {
  const obj1Keys1 = Object.keys(object1);
  const obj2Keys2 = Object.keys(object2);

  if (obj1Keys1.length !== obj2Keys2.length) return false;

  for (key of obj1Keys1) {
    const keys1 = object1[key];
    const keys2 = object2[key];
    const areObjects = isObject(keys1) && isObject(keys2);
    if (
      (!areObjects && keys1 !== keys2) ||
      (areObjects && !deepCompare(keys1, keys2))
    )
      return false;
  }
  return true;
}
function isObject(object) {
  return object !== null && typeof object === "object";
}

console.log(deepCompare(obj1, obj2));

function checkDate(numericData) {
  const date1 = new Date(numericData);
  const date1Date = date1.getDate();
  const date1Month = date1.getMonth();
  const date1Year = date1.getFullYear();
  const todayDate = new Date();
  const todayDateDate = todayDate.getDate();
  const todayDateMonth = todayDate.getMonth();
  const todayDateYear = todayDate.getFullYear();

  if (
    date1Date === todayDateDate &&
    date1Month === todayDateMonth &&
    date1Year === todayDateYear
  ) {
    console.log("Today");
  } else if (
    date1Date === todayDateDate + 1 &&
    date1Month === todayDateMonth &&
    date1Year === todayDateYear
  ) {
    console.log("Tomorrow");
  } else {
    console.log(
      date1.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    );
  }
}
checkDate(1650461086415);

// const obj1 = {
//   a: {
//     b: {
//       c: false,
//       d: null,
//       e: [
//         1,
//         2,
//         3,
//         {
//           m: "hello",
//         },
//       ],
//     },
//   },
//   k: null,
//   b: {
//     k: "name",
//   },
// };
// const obj2 = {
//   a: {
//     b: {
//       c: false,
//       d: null,
//       e: [
//         1,
//         2,
//         3,
//         {
//           m: "hello",
//         },
//       ],
//     },
//   },
//   k: null,
//   b: {
//     k: "name",
//   },
// };

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// function deepEqual(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const key of keys1) {
//     const val1 = object1[key];
//     const val2 = object2[key];
//     const areObjects = isObject(val1) && isObject(val2);
//     if (
//       (areObjects && !deepEqual(val1, val2)) ||
//       (!areObjects && val1 !== val2)
//     ) {
//       return false;
//     }
//   }
//   return true;
// }
// // function isObject(object) {
// //   return object != null && typeof object === "object";
// // }

// // console.log(deepEqual(obj1, obj2));

function deepObj(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (keys of keys1) {
    const val1 = obj1[keys];
    const val2 = obj1[keys];

    const areObjects = isObject(val1) && isObject(val2);

    // console.log(areObjects);
    if ((!areObjects && val1 !== val2) || (areObjects && !deepObj)) {
      return false;
    }
  }
  return true;
}
function isObject(object) {
  return object != null && typeof object === "object";
}
console.log(deepObj(obj1, obj2));
