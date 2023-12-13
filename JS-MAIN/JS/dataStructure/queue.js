class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.queue.length === 0) {
      return "Underflow";
    }
    return this.queue.shift();
  }
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  size() {
    return this.queue.length;
  }
  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + " ";
    }
    return str.trim();
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log("Queue:", queue.printQueue()); // Output: 10 20 30 40

console.log("Front element:", queue.front()); // Output: 10

console.log("Dequeued:", queue.dequeue()); // Output: 10

console.log("Queue after dequeue:", queue.printQueue()); // Output: 20 30 40

console.log("Queue size:", queue.size()); // Output: 3

console.log("Is queue empty?", queue.isEmpty()); // Output: false
