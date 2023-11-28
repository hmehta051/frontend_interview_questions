function expensiveFunction() {
  console.log("Executing expensive operation");
  return Math.floor(Math.random() * 10000);
}

const oneFunction = (func) => {
  let isFlag = false;
  let result;
  return function (...args) {
    if (isFlag) {
      return "Function called Limit Exceed";
    }
    result = func(...args);
    isFlag = true;
    return result;
  };
};

const runOnce = oneFunction(expensiveFunction);

console.log(runOnce()); // This will execute the expensive operation
console.log(runOnce()); // This will return the cached result
console.log(runOnce()); // This will also return the cached result
