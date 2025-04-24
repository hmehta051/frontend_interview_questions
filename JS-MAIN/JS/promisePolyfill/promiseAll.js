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

Promise.myAll = (promiseArr) => {
    return new Promise((resolve, reject) => {
        let outputArr = [];
        let count = promiseArr.length;

        if (count === 0) {
            resolve(outputArr);
            return;
        }

        promiseArr.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then((temp) => {
                    outputArr[idx] = temp;
                })
                .catch((err) => {
                   reject(err)
                })
                .finally(() => {
                    count--;
                    if (count === 0) {
                        resolve(outputArr)
                    }
                })
        })
    })
}

Promise.myAll(promiseArr).then((temp) => console.log(temp, "hello")).catch((err) => console.log(err, "k")).finally(() => console.log("run successfully"))