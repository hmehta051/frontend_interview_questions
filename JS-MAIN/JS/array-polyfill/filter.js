// Without thisArg

Array.prototype.myFilter = function(callback){
    const resultArr = [];
    for(let i =0;i<this.length;i++){
        if(callback(this[i],i,this)){
            resultArr.push(this[i]);
        }
    }
    return resultArr;
}

console.log([1,2,3,4].myFilter((item)=>item>2));


// With thisArg

Array.prototype.myFilter = function(callback,thisArg){
    const resultArr = [];
    for(let i =0;i<this.length;i++){
        if(callback.call(thisArg,this[i],i, this)){
            resultArr.push(this[i])
        }
    }
    return resultArr;
}

console.log([1,2,3,4].myFilter((item)=>item>1));