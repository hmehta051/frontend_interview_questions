const flatArray = (arr, depth) => {
  if (depth < 1) {
    return arr.slice();
  }
  const ans = arr.reduce((acc, cv) => {
    if (Array.isArray(cv)) {
      return acc.concat(flatArray(cv, depth - 1));
    }
    return acc.concat(cv);
  }, []);
  return ans;
};

console.log(flatArray([1, 2, 3, 4, [6]]), 1);
