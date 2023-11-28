const polyFillArr = [2, 6, 9, 45, 3, 2, 7];

// MAP
Array.prototype.myMap = function (callback) {
  let ansArr = [];
  for (let i = 0; i < this.length; i++) {
    ansArr.push(callback(this[i], i, this));
  }
  return ansArr;
};
let mapResult = polyFillArr.myMap((elem) => elem * 2);
console.log(mapResult);
// FOREACH
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
let eachResult = polyFillArr.myForEach((elem) => elem * 2);
console.log(eachResult);
// FILTER
Array.prototype.myFilter = function (callback) {
  let ansArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      ansArr.push(this[i]);
    }
  }
  return ansArr;
};
let filterResult = polyFillArr.myFilter((elem) => elem > 6);
console.log(filterResult);
// REDUCE
Array.prototype.myReduce = function (callback, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i], i, this) : this[i];
  }
  return acc;
};
console.log(polyFillArr.myReduce((acc, cv) => acc + cv, 1));
