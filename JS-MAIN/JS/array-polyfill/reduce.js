const arr = [1, 2, 3, 4];

console.log(arr.reduce((acc, cv) => acc + cv, 5)); // 15

Array.prototype.myReduce = function(callbackFn, init) {
  let acc;
  let startIdx = 0;

  // Track whether an initial value was explicitly provided
  if (arguments.length >= 2) {
    acc = init;
  } else {
    if (this.length === 0) throw new TypeError('Reduce of empty array with no initial value');
    acc = this[0];
    startIdx = 1;
  }

  for (let i = startIdx; i < this.length; i++) {
    // was: acc = acc ? callbackFn(...) : this[i]
    // that silently resets acc to this[i] whenever acc is falsy (0, false, "")
    acc = callbackFn(acc, this[i], i, this);
  }
  return acc;
};

console.log([1, 2, 3, 4].myReduce((acc, cv) => acc * cv, 1)); // 24
console.log([1, 2, 3, 4].myReduce((acc, cv) => acc + cv));    // 10 (no initial value)
console.log([false, true].myReduce((acc, cv) => acc || cv));  // true (was broken before)
