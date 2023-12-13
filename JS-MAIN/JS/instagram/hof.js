// Accept function as argument or return function

const multiplyFunction = (arg) => {
  return function (num) {
    return num * arg;
  };
};
console.log(multiplyFunction(2)(2));

const takeParam = (func) => {
  let x = 5;
  return func(x);
};

const func = (x) => {
  return x * 5;
};

console.log(takeParam(func));

console.log("---------------------");

const test = () => {
  try {
    throw new Error("This is Try");
  } catch (error) {
    console.log("Catch Block");
  } finally {
    console.log("finally block");
  }
};
test();

console.log("---------------------");

const val = [1, 10, 21, 2];
// let res1 = val.toSorted((a, b) => a - b);
// let res2 = val.sort((a, b) => a - b);
// console.log(res1, val);

console.log("---------------------");

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

const grpBy = (inventory) => {
  const obj = inventory.reduce((acc, cv) => {
    const { type, quantity } = cv;
    if (!acc[type]) {
      acc[type] = 0;
    }
    acc[type] += quantity;
    return acc;
  }, {});

  let arr = [];
  for (let key in obj) {
    arr.push({ type: key, quantity: obj[key] });
  }
  return arr;
};
console.log(grpBy(inventory));

// const result = Object.groupBy(inventory, ({ type }) => type);
// console.log(res);
