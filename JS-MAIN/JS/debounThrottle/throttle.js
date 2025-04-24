function throttle(func,limit){
    let lastcall = 0;
    return function(...args){
        const now = Date.now();
        if(now-lastcall>=limit){
            // func(...args);
            func.apply(this,args)
            lastcall=now
        }
    }
}