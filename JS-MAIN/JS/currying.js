// const curringFunc = (a) => {
//   return function (b) {
//     if (b) {
//       return curringFunc(a + b);
//     } else {
//       return a;
//     }
//   };
// };
// console.log(curringFunc(1)(2)(3)());

// const currFunc = (a) => {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// };

// currFunc(3)(4)(5);


const sum = (a) => {
  return (b)=>{
    return (c)=>{
      return a+b+c
    }
  }
}
console.log(sum(2)(6)(1))


const curry = (func) =>{
  return function curriedFunc(...args){
   if(args.length>=func.length){
    return func(...args)
   }else{
    return function(...next){
      return curriedFunc(...args,...next)
    }
   }
  }
}

const sumTotal = (a,b,c,d) => a+b+c+d;

const totalSum = curry(sumTotal);
console.log(totalSum(1)(2)(3)(4));
