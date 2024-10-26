// Dynamic Key

// without [] literal key , with [] dynamic key
const property = "firstName";
const name = "Hem";

const object = {
    [property]:name
}
console.log(object);

const func = (function(a){
    delete a;
    return a;
  })(5);
  
console.log(func);


const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// Question 6 : Output

console.log([...'Lydia']);


// Question 7 : Output

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);


// Question 8 : Output

const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };
  
const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);


const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
console.log(shape.diameter());
console.log(shape.perimeter());


let user1 = {
    name:"Piyush",
    age:24,
    fullName : {
        firstName : "Piyush",
        lastName : "Agarwal"
    }
};
  
const name1 = "Roadside Coder"    // to change name or renaming

const {fullName : {firstName}} = user1;

console.log(firstName);


// Question 12 : Output

let ca = { greeting: 'Hey!' };
let d;

d = ca;
ca.greeting = 'Hello';
console.log(d.greeting);


let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);


// Question 17 : Output 

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };
    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?

// shallow copy vs deep copy

// const original = {
//     name: "Alice",
//     age: 25,
//     address: {
//       city: "New York",
//       country: "USA"
//     }
//   };
  
  // Shallow copy using Object.assign
//   const shallowCopy = Object.assign({}, original);
  
//   // Modify the nested object in the copy
//   shallowCopy.address.city = "Los Angeles";
  
//   console.log(original.address.city); // Output: "Los Angeles"
//   console.log(shallowCopy.address.city); // Output: "Los Angeles"
  

//   const original = {
//     name: "Alice",
//     age: 25,
//     address: {
//       city: "New York",
//       country: "USA"
//     }
//   };
  
//   // Deep copy using JSON methods
//   const deepCopy = JSON.parse(JSON.stringify(original));
  
//   // Modify the nested object in the copy
//   deepCopy.address.city = "Los Angeles";
  
//   console.log(original.address.city); // Output: "New York"
//   console.log(deepCopy.address.city); // Output: "Los Angeles"

const original = {
    name: "Alice",
    age: 25,
    address: {
      city: "New York",
      country: "USA"
    },
    dateOfBirth: new Date('1998-05-21'),
    hobbies: ["reading", "hiking"]
  };
  
  // Deep copy using structuredClone
  const deepCopy = structuredClone(original);
  
  // Modify the deep copy
  deepCopy.address.city = "Los Angeles";
  deepCopy.dateOfBirth.setFullYear(2000);
  
  console.log(original.address.city); // Output: "New York"
  console.log(deepCopy.address.city);  // Output: "Los Angeles"
  
  console.log(original.dateOfBirth);   // Original date stays intact
  console.log(deepCopy.dateOfBirth);   // Deep copy has the modified date
  
  