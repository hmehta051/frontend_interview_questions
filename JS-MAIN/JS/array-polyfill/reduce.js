const arr = [1,2,3,4];

console.log(arr.reduce((acc,cv)=>acc+cv,5));

Array.prototype.myReduce = function(callbackFn,init){
    let acc = init;
    for(let i=0;i<this.length;i++){
        acc = acc ? callbackFn(acc,this[i],i,this): this[i];
    }
    return acc;
}

console.log([1,2,3,4].myReduce((acc,cv)=>acc*cv,1));