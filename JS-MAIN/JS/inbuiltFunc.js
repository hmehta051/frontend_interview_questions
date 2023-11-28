// parseFloat, parseInt, parse
/* The parseInt() function parses a string argument and returns an integer of the specified radix
// (the base in mathematical numeral systems).*/
// The parseInt method parses a value as a string and returns the first integer.
// parseInt(string)
// parseInt(string, radix)
// parseInt(string/NUMBER)

console.log(
  parseInt("10"),
  parseInt("10.00"),
  parseInt("10.33"),
  parseInt("34 45 66"),
  parseInt("   60   "),
  parseInt("40 years"),
  parseInt("He was 40"),
  parseInt("1100", 2),
  parseInt(null, 36),
  parseInt(-12.99),
  parseFloat("12.04")
);

// Important String Methods
const str = "Hello My World Hello";
const search = "Hello";
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.concat(" ", "Hello", " ", "Good Morning"));
console.log(String.fromCharCode(65, 66, str.charCodeAt(6)));
console.log(str.includes(search));
console.log(str.indexOf(search, str.indexOf(search) + 1));
console.log(str.replaceAll("Hello", "Hi"));
console.log(str.split(" "));
console.log(str.substring(0, 5));

// Important Array Methods
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
console.log(array1.concat(array2));

const isEven = (num) => (num & 1) === 0;
const arr = [2, 4, 6, 8, 10];
console.log(arr.every(isEven));
console.log(arr.filter((elem) => elem <= 4));
console.log(arr.find((elem) => elem === 20));

const add = (el) => {
  if (!arr.find((elem) => elem === el)) {
    arr.push(el);
  }
  return arr;
};

console.log(add(2));

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat(Infinity));
console.log(Array.from("foo")); // Shallow Copy
console.log(arr.includes(2));
console.log(arr.indexOf(2));

const array4 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result = array4.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

console.log(ans.unshift());
// shift pop
// unshift push
