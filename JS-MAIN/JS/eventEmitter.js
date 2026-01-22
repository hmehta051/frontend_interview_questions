class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(eventName, listner) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(listner)
  }
  emit(eventName, ...args) {
    if (!this.events[eventName]) return
    this.events[eventName].forEach(listner => listner(...args))
  }
  off(eventName, deletelistner) {
    if (!this.events[eventName]) {
      return
    }
    this.events[eventName] = this.events[eventName].forEach(elem => {
      elem !== deletelistner
    })
  }
  once(eventName, listner) {
    const wrapper = (...args) => {
      listner(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
  removeListner(eventName, listner) {
    this.off(eventName, listner)
  }
  removeAllListner(eventName) {
    if (!eventName) {
      this.events = {}
    } else {
      delete this.events[eventName]
    }
  }
}
