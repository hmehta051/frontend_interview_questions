class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.maxStack = [];
  }

  push(item) {
    this.stack.push(item);
    if (
      this.minStack.length === 0 ||
      item <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(item);
    }
    if (
      this.maxStack.length === 0 ||
      item >= this.maxStack[this.minStack.length - 1]
    ) {
      this.maxStack.push(item);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return "Stack Underflow";
    }
    const removedItem = this.stack.pop();

    if (removedItem === this.minStack[this.stack.length - 1]) {
      this.minStack.pop();
    }
    if (removedItem === this.maxStack[this.stack.length - 1]) {
      this.maxStack.pop();
    }
    return removedItem;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + " ";
    }
    return str.trim();
  }
  min() {
    if (this.maxStack.length === 0) {
      return "Stack is empty";
    }
    return this.maxStack[this.maxStack.length - 1];
  }
  max() {
    if (this.minStack.length === 0) {
      return "Stack is empty";
    }
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new Stack();

// console.log(stack.isEmpty()); // Output: true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack()); // Output: 10 20 30

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30

console.log(stack.size()); // Output: 2

console.log(stack.printStack()); // Output: 10 20
console.log(stack.min());
console.log(stack.max());
