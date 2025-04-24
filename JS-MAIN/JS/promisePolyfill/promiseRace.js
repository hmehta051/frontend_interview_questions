// const p1 = new Promise((resolve, reject) => {
//     resolve("Promise 1")
// })
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2")
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3")
    },1000)
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 4")
    },500)
})

const promiseArr = [p2, p3, p4]


Promise.myrace = (promiseArr) =>{
    return new Promise((resolve,reject)=>{
        promiseArr.forEach(element => {
            Promise.resolve(element).then(resolve,reject)
        });
    })
}
Promise.myrace(promiseArr).then((elem)=>console.log(elem)).catch((err)=>console.log(err))
