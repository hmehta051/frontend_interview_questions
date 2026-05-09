function isObject(val) {
  return val !== null && typeof val === "object";
}

function deepCompare(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {              // was: missing `const` — leaked to global scope
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (!areObjects && val1 !== val2) ||
      (areObjects && !deepCompare(val1, val2))
    )
      return false;
  }
  return true;
}

const obj1 = {
  a: {
    b: {
      c: false,
      d: null,
      e: [1, 2, 3, { m: "hello" }],
    },
  },
  k: null,
  b: { k: "name" },
};
const obj2 = {
  a: {
    b: {
      c: false,
      d: null,
      e: [1, 2, 3, { m: "hello" }],
    },
  },
  k: null,
  b: { k: "name" },
};

console.log(deepCompare(obj1, obj2)); // true
