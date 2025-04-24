const p1 = new Promise((resolve, reject) => {
    resolve("Promise 1")
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2")
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3")
    })
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 4")
    })
})

const promiseArr = [p1, p2, p3, p4]

Promise.myAllSettled = (promiseArr) => {
    return new Promise((resolve,reject)=>{
        let count=0;
        let output=[];
        if(count===promiseArr.length){
            resolve(output);
            return;
        }
        promiseArr.forEach((element,idx) => {
            Promise.resolve(element)
            .then((element)=>{
                output[idx]={status:"fulfilled",value:element}
            })
            .catch((err)=>{
                output[idx]={status:"rejected",value:err}
            })
            .finally(()=>{
                count++;
                if(count===promiseArr.length){
                    resolve(output);
                    return;
                }
            })
        });
    })
}


Promise.myAllSettled(promiseArr).then((temp) => console.log(temp, "hello")).catch((err) => console.log(err, "k")).finally(() => console.log("run successfully"))