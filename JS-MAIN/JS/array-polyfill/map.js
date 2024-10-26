// Without thisArg

// Array.prototype.myMap = function(callback){
//     const resultArr = [];
//     for(let i =0;i<this.length;i++){
//         resultArr.push(callback(this[i],i, this))
//     }
//     return resultArr;
// }

// console.log([1,2,3,4].myMap((item)=>item*5));


// With thisArg

Array.prototype.myMap = function(callback,thisArg){
    const resultArr = [];
    for(let i =0;i<this.length;i++){
        resultArr.push(callback.call(thisArg,this[i],i, this))
    }
    return resultArr;
}

const mult = {
    factor  : 12
}

console.log([1,2,3,4].myMap(function(item){
    return item*this.factor
},mult))

// console.log([1,2,3,4].myMap((item)=>item*10));

/*
map(callbackFn) you can use normal function or arrow function
map(callbackFn, thisArg) use only normal function
*/

// const mult = {
//     factor  : 12
// }

// console.log([1,2,3,4].myMap(function(item){
//     return item*this.factor
// },mult))