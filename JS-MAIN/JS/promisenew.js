// using callback
// console.log("start");
// function abc(username,cb){
//     setTimeout(()=>{
//         cb(username);
//     },0)
// }
// const print = abc("Hemendra",(x)=>{
//     console.log(x);
// });
// console.log("stop");


// using promise

// console.log("start");

// const solve = () => {
//     return new Promise((resolve, reject) => {
//         const a = true;
//         console.log("start promise");
//         setTimeout(() => {
//             if (a) resolve("success")
//             else reject(new Error("failed"));
//         }, 0)
//         console.log("promise end");
//     })
// }

// const y = solve().then((data) => {
//    return data;
// });

// console.log(y);
// console.log("end");

// promise chain

// Function that returns a promise
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = 'Data from fetchData';
//             resolve(data);
//         }, 1000);
//     });
// }

// // Function that processes the data
// function processData(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const processedData = `${data} - processed`;
//             console.log(processedData); // Log processed data
//             resolve(processedData);
//         }, 1000);
//     });
// }

// // Function that logs the final data
// function logData(data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(data); // Log final data
//             resolve('Logging complete');
//         }, 1000);
//     });
// }

// // Chaining the promises
// fetchData()
//     .then((data) => {
//         console.log(data); // Log fetched data
//         return processData(data);
//     })
//     .then(logData)
//     .then((finalMessage) => {
//         console.log(finalMessage);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });




// Promise combinators

/**
 * Promise.all([p1,p2,p3]) => if one of promise is failed whole promise is failed
 * Promise.race([p1,p2,p3]) => whichever promise resolve/reject first , output is that promise
 * Promise.allSettled([p1,p2,p3]) => if one of promise is failed still output is all resolved promise
 * Promise.any([p1,p2,p3]) => whichever promise resolve first , output is that promise, it will reject the failed promise, all promise rejected then it will rejected
 */