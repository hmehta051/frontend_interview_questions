class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.maxStack = [];
  }

  push(item) {
    this.stack.push(item);
    if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(item);
    }
    // was: this.maxStack[this.minStack.length - 1] — wrong stack used for index
    if (this.maxStack.length === 0 || item >= this.maxStack[this.maxStack.length - 1]) {
      this.maxStack.push(item);
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return "Stack Underflow";
    }
    const removedItem = this.stack.pop();
    // was: this.stack.length - 1 after pop — off by one; compare against top of each auxiliary stack
    if (removedItem === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    if (removedItem === this.maxStack[this.maxStack.length - 1]) {
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
    return this.stack.join(" ");
  }

  // was swapped: min() returned from maxStack, max() returned from minStack
  min() {
    if (this.minStack.length === 0) return "Stack is empty";
    return this.minStack[this.minStack.length - 1];
  }

  max() {
    if (this.maxStack.length === 0) return "Stack is empty";
    return this.maxStack[this.maxStack.length - 1];
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(5);

console.log(stack.printStack()); // 10 20 30 5
console.log(stack.peek());       // 5
console.log(stack.min());        // 5
console.log(stack.max());        // 30
console.log(stack.pop());        // 5
console.log(stack.min());        // 10
console.log(stack.max());        // 30
console.log(stack.size());       // 3
