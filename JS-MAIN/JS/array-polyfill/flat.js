function myFlat(arr,depth){
    if(depth<1) return arr;
    return arr.reduce((acc,cv)=>{
        if(Array.isArray(cv)){
           return acc.concat(myFlat(cv,depth-1)) 
        }
        return acc.concat(cv);
    },[])
}

console.log(myFlat([1,2,3,5,[3,4,[6,7]]],Infinity));


// if (!Array.prototype.myFlat) {
//     Array.prototype.myFlat = function(depth = 1) {
//         const result = [];

//         const flatten = (arr, depth) => {
//             for (let i = 0; i < arr.length; i++) {
//                 if (Array.isArray(arr[i]) && depth > 0) {
//                     flatten(arr[i], depth - 1); // Recursively flatten sub-arrays
//                 } else {
//                     result.push(arr[i]); // Push non-array elements to the result
//                 }
//             }
//         };

//         flatten(this, depth);
//         return result;
//     };
// }

// // Test cases
// console.log([1, 2, [3, 4, [5, 6]]].myFlat()); // Output: [1, 2, 3, 4, [5, 6]]
// console.log([1, 2, [3, 4, [5, 6]]].myFlat(1)); // Output: [1, 2, 3, 4, [5, 6]]
// console.log([1, 2, [3, 4, [5, 6]]].myFlat(2)); // Output: [1, 2, 3, 4, 5, 6]
// console.log([1, 2, [3, 4, [5, 6]]].myFlat(0));
