const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      inThrottle = true;
      func(...args); // func.apply(this,args)
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};
