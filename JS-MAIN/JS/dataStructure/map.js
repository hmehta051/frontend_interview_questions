class MyMap {
  constructor() {
    this.items = {};
  }

  put(key, value) {
    this.items[key] = value;
  }

  get(key) {
    // was: || undefined — returns undefined for falsy stored values (0, false, "")
    return this.items.hasOwnProperty(key) ? this.items[key] : undefined;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  has(key) {
    // return key in this.items;
    return this.items.hasOwnProperty(key);
  }

  remove(key) {
    if (key in this.items) {
      delete this.items[key];
      return true;
    }
    return false;
  }
}
