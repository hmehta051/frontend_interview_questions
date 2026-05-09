class MyPromise {
  #state = "pending";
  #value = undefined;
  #thenCallbacks = [];
  #catchCallbacks = [];

  constructor(executor) {
    try {
      executor(this.#resolve.bind(this), this.#reject.bind(this));
    } catch (e) {
      this.#reject(e);
    }
  }

  #resolve(value) {
    if (this.#state !== "pending") return;
    // Handle thenable (promise returned from resolve)
    if (value && typeof value.then === "function") {
      value.then(this.#resolve.bind(this), this.#reject.bind(this));
      return;
    }
    this.#value = value;
    this.#state = "fulfilled";
    this.#runCallbacks();
  }

  #reject(value) {
    if (this.#state !== "pending") return;
    this.#value = value;
    this.#state = "rejected";
    this.#runCallbacks();
  }

  #runCallbacks() {
    if (this.#state === "fulfilled") {
      this.#thenCallbacks.forEach((cb) => cb(this.#value));
      this.#thenCallbacks = [];
    }
    if (this.#state === "rejected") {
      this.#catchCallbacks.forEach((cb) => cb(this.#value));
      this.#catchCallbacks = [];
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#thenCallbacks.push((value) => {
        if (!onFulfilled) { resolve(value); return; }
        try { resolve(onFulfilled(value)); } catch (e) { reject(e); }
      });
      this.#catchCallbacks.push((value) => {
        if (!onRejected) { reject(value); return; }
        try { resolve(onRejected(value)); } catch (e) { reject(e); }
      });
      this.#runCallbacks();
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => { onFinally(); return value; },
      (value) => { onFinally(); throw value; }
    );
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(value) {
    return new MyPromise((_, reject) => reject(value));
  }
}

// Usage
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("resolved!"), 500);
});

p.then((val) => {
  console.log(val); // resolved!
  return "chained";
})
  .then((val) => console.log(val)) // chained
  .catch((err) => console.error(err))
  .finally(() => console.log("finally"));
