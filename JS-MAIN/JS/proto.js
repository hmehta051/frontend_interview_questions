const obj = {
  name: "hemendra",
  age: 23,
  getName: function () {
    return this.name;
  },
  getAge: () => {
    return obj.age;
  },
};
const obj1 = {
  roll: 1,
  __proto__: obj,
};
console.log(obj1.getAge());

Array.prototype.printName = function () {
  return this.map((el) => el);
};
const myName = ["Hemendra", "Mehta"];
console.log(myName.printName());
// console.log(obj.getAge());
// console.log(obj.getName());

//constructor function

function ProjectText(subject, roll) {
  this.subject = subject;
  this.roll = roll;
}

const stu1 = new ProjectText("Physics", 1);
console.log(stu1);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  return [firstName, lastName];
}

const name = new Person("John", "Doe");
Person.prototype.printFirstName = function (firstName) {
  console.log(firstName);
};
console.log(name.printFirstName("Hello"));
