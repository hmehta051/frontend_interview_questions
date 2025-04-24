const p1 = new Promise((res, rej) => {
    return setTimeout(() => {
        return res("resolved");
    })
});

p1.then((res) => console.log(res)).catch(e => console.error(e));




function MyPromise(executer){
    let value;
    let error;
    
    function resolve(args){

    }
    function reject(args){

    }
    this.then=function(elem){

    }
    this.catch=function(elem){

    }
}