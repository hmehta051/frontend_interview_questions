const curringFunc = (a) => {
  return function (b) {
    if (b) {
      return curringFunc(a + b);
    } else {
      return a;
    }
  };
};
console.log(curringFunc(1)(2)(3)());

const currFunc = (a) => {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
};

currFunc(3)(4)(5);
