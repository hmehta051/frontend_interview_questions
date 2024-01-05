// Inversion of Object

const inversion = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    // Check if the value is not an array in the inverted object, initialize it
    acc[value] = acc[value] ? { ...acc[value], key } : key;
    return acc;
  }, {});
};

const originalObj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

console.log(inversion(originalObj));
