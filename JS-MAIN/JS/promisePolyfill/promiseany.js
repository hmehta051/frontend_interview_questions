const p1 = new Promise((resolve, reject) => {
    reject("Promise 1")
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2")
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 3")
    })
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 4")
    })
})

const promiseArr = [p1, p2, p3, p4]




Promise.myAny=(promiseArr) => {
    return new Promise((resolve, reject) => {
        let count = 0;
        let output = [];

        if (count === promiseArr.length) {
            reject(new AggregateError([], "All Promises were rejected"));
            return;
        }
        promiseArr.forEach((element, idx) => {
            Promise.resolve(element)
                .then(resolve)
                .catch((err) => {
                    output[idx] = err;
                    count++;
                    if (count === promiseArr.length) {
                        reject(new AggregateError([], "All Promises were rejected"));
                        return;
                    }
                })
        });
    })
}

Promise.myAny(promiseArr).then((elem)=>console.log(elem)).catch((err)=>console.log(err))