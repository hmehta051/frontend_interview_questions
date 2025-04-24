function curryArgs(a){
    return function(b){
        if(b){
            return curryArgs(a+b);
        }else{
            return a;
        }
    }
}
console.log(curryArgs(1)(2)(3)())