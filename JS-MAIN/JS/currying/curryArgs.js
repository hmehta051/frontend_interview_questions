function curryArgs(a) {
  return function(b) {
    if (b !== undefined) { // was: if(b) — fails for b=0 since 0 is falsy
      return curryArgs(a + b);
    } else {
      return a;
    }
  };
}

console.log(curryArgs(1)(2)(3)());  // 6
console.log(curryArgs(1)(0)(3)());  // 4 — would have returned 1 before fix
