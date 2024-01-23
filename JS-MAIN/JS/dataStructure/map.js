class MyMap {
  constructor() {
    this.items = {};
  }

  put(key, value) {
    this.items[key] = value;
  }

  get(key) {
    return this.items[key] || undefined;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  has(key) {
    return key in this.items;
  }

  remove(key) {
    if (key in this.items) {
      delete this.items[key];
      return true;
    }
    return false;
  }
}
