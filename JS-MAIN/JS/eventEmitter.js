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
  off(eventName, deleteListener) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter(
      (func) => func != deleteListener
    );
  }
  emit(eventName, ...args) {
    if (this.events[eventName].length !== 0) {
      this.events[eventName].forEach((listener) => listener(...args));
    }
  }
  once(eventName, listenerOnce) {
    const onceWrapper = (...args) => {
      listenerOnce(...args);
      this.off(eventName, listenerOnce);
    };
    this.on(eventName, onceWrapper);
  }
  removeListener(eventName, listenerToRemove) {
    this.off(eventName, listenerToRemove);
  }
  removeAllListener(eventName) {
    if (!eventName) {
      this.events = {};
    } else {
      delete this.events[eventName];
    }
  }
}

const eventMethod = new EventEmitter();
function clickListener(name) {
  console.log(`${name} Clicked`);
}
function clickListenerTwo(name) {
  console.log(`${name} Clicked Twice`);
}
function hoverListener(name) {
  console.log(`${name} Hover`);
}
function scrollListener(name) {
  console.log(`${name} scroll`);
}
eventMethod.on("click", clickListener);
eventMethod.on("click", clickListenerTwo);
eventMethod.on("hover", hoverListener);
eventMethod.on("scroll", scrollListener);

eventMethod.off("click", clickListenerTwo);
eventMethod.off("click", clickListener);

eventMethod.emit("hover", "Hemendra");
console.log(eventMethod);
