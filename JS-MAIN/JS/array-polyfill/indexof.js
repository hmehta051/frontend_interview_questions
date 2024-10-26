Array.prototype.myIndexOf = function(arg,fromIdx){
    if (fromIdx < 0) {
        fromIdx = Math.max(this.length + fromIdx, 0);
    }
    for(let i=fromIdx;i<this.length;i++){
        if(this[i]===arg){
            return i;
        }
    }
    return -1;
}

console.log([1,2,3,4,5,6,3].myIndexOf(3));