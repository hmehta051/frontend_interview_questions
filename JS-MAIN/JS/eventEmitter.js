class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listener) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(listener);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return;
    this.events[eventName].forEach(listener => listener(...args));
  }

  off(eventName, listenerToRemove) {
    if (!this.events[eventName]) return;
    // forEach returns undefined — must use filter to get the new array
    this.events[eventName] = this.events[eventName].filter(
      listener => listener !== listenerToRemove
    );
  }

  once(eventName, listener) {
    const wrapper = (...args) => {
      listener(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }

  removeListener(eventName, listener) {
    this.off(eventName, listener);
  }

  removeAllListeners(eventName) {
    if (!eventName) {
      this.events = {};
    } else {
      delete this.events[eventName];
    }
  }
}

// Usage
const emitter = new EventEmitter();

const greet = (name) => console.log(`Hello, ${name}!`);
emitter.on("greet", greet);
emitter.emit("greet", "Hem");   // Hello, Hem!
emitter.off("greet", greet);
emitter.emit("greet", "Hem");   // (no output — listener removed)

emitter.once("ping", () => console.log("pong"));
emitter.emit("ping");           // pong
emitter.emit("ping");           // (no output — fired only once)
