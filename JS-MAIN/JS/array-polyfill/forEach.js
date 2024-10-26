// Without thisArg

Array.prototype.myFOREACH = function(callback){
    for(let i =0;i<this.length;i++){
       callback(this[i],i, this)
    }
}

console.log([1,2,3,4].myFOREACH((item)=>item*5));


// With thisArg

Array.prototype.myFOREACH = function(callback,thisArg){
    for(let i =0;i<this.length;i++){
      callback.call(thisArg,this[i],i, this)
    }
}

console.log([1,2,3,4].myFOREACH((item)=>item*10));

/*
map(callbackFn) you can use normal function or arrow function
map(callbackFn, thisArg) use only normal function
*/

const mult = {
    factor  : 12
}

console.log([1,2,3,4].forEach(function(item){
    return item*this.factor
},mult))