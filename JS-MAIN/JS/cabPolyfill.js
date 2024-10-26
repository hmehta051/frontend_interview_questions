/*
Call is a function that helps you change the context of the invoking function.
In other words, it helps you replace the value of "this" inside a function with whatever value you want
*/

// const userDetails = {
//     name: "Hemendra",
//     age: 21,
//     designation: "SDE",
//     printDetails(arr1, arr2) {
//       console.log(
//         `Name : ${this.name}, Age : ${this.age}, Designation : ${this.designation}, Extra : ${arr1} ${arr2}`
//       );
//     },
//   };

//   const userDetails1 = {
//     name: "Hem",
//     age: 22,
//     designation: "SE",
//   };
//   const bindFunc = userDetails.printDetails.bind(userDetails1, "k", "k8");
//   bindFunc();
//   // userDetails.printDetails.apply(userDetails1, ["k", "k1"]);
//   // userDetails.printDetails();

// const userDetails1 = {
//   name: "Hemendra",
//   age: 21,
//   designation: "SDE",
// };
// const userDetails2 = {
//   name: "Hem",
//   age: 22,
//   designation: "FSD",
// };

// let printName = function (arr) {
//   console.log(this.name, arr);
// };

// //CALL
// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     return new Error(this + "not callable");
//   }
//   context.fn = this;
//   context.fn(...args);
// };
// //APPLY
// Function.prototype.myApply = function (context = {}, args = []) {
//   if (typeof this !== "function") {
//     return new Error(this + "not callable");
//   }
//   context.fn = this;
//   context.fn(...args);
// };
// //BIND
// Function.prototype.myBind = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     return new Error(this + "not callable");
//   }
//   if (!Array.isArray(args)) {
//     throw new TypeError("Args must be in Array");
//   }
//   context.fn = this;
//   return function (...newArgs) {
//     return context.fn(...args, ...newArgs);
//   };
// };




// FINAL POLYFILL CALL,APPLY,BIND

const globalThis = window // in js window, in nodejs global;

Function.prototype.myCall = function(context,...args){
  if(typeof this !== 'function'){
    throw new Error(this + ' is not callable');
  }
  context= context | globalThis;
  context.fn=this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype.myApply = function(context,args=[]){
  if(typeof this !== 'function'){
    throw new Error(this + ' is not callable');
  }
  if(!Array.isArray(args)){
    throw new Error(args + " not an array")
  }
  context= context | globalThis;
  context.fn=this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

Function.prototype.myApply = function(context,...args){
  if(typeof this !== 'function'){
    throw new Error(this + ' is not callable');
  }
 
  context= context | globalThis;
  
  const self = this;

  return function(...newArgs){
    return self.apply(context,[...args,...newArgs]);
  };
};