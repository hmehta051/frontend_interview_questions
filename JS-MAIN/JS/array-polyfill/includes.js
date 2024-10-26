Array.prototype.myIncludes = function(arg){
    for(let i =0;i<this.length;i++){
        if(this[i]===arg){
           return true;
        }
    }
    return false;
}

console.log([1,2,3,4].myIncludes(7));