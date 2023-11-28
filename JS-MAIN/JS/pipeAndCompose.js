// compose(function3, function2, function1)(initialArg);
// pipe(function1, function2, function3)(initialArg);

/*

To make it short, composition and piping are almost the same,
 the only difference being the execution order; If the functions 
 are executed from left to right, it's a pipe, on the other hand, 
 if the functions are executed from right to left it's called compose.
 */
const pipe = (...funcs) => {
  return (input) => funcs.reduce((acc, cv) => cv(acc), input);
};
const compose = (...funcs) => {
  return (input) => funcs.reduceRight((acc, cv) => cv(acc), input);
};
const add = (x) => x + 2;
const double = (x) => x * 2;
const square = (x) => x * x;

// Compose the functions using pipe
const pipeFunction = pipe(add, double, square);

console.log(pipeFunction(5));

const composeFunction = compose(add, double, square);

console.log(composeFunction(5));
