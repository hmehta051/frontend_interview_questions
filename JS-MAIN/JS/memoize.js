const memoizedFunc = () => {
  let cache = {};

  return (val) => {
    if (val in cache) {
      console.log("Value Cached");
      return cache[val];
    } else {
      let res = val * 20;
      cache[val] = res;
      console.log("Adding");
      return res;
    }
  };
};
const memoize = memoizedFunc();
console.log(memoize(20));
console.log(memoize(20));
