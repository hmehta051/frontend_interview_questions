class HashSet {
  constructor() {
    this.set = {};
  }

  // Add an element to the HashSet
  add(value) {
    if (!this.contains(value)) {
      this.set[value] = true;
      return true; // Indicates the value was added
    }
    return false; // Indicates the value already exists
  }

  // Remove an element from the HashSet
  delete(value) {
    if (this.contains(value)) {
      delete this.set[value];
      return true; // Indicates the value was removed
    }
    return false; // Indicates the value was not found
  }

  // Check if the HashSet contains a specific element
  contains(value) {
    return this.set.hasOwnProperty(value);
  }

  // Get the size of the HashSet
  size() {
    return Object.keys(this.set).length;
  }

  // Get all values in the HashSet
  values() {
    return Object.keys(this.set);
  }

  // Clear the HashSet
  clear() {
    this.set = {};
  }
}

// Example usage:
const myHashSet = new HashSet();

myHashSet.add(5);
myHashSet.add(10);
myHashSet.add(5); // This won't be added since it already exists

console.log(myHashSet.contains(5)); // Output: true
console.log(myHashSet.size()); // Output: 2
console.log(myHashSet.values()); // Output: ['5', '10']

myHashSet.delete(10);
console.log(myHashSet.size()); // Output: 1

myHashSet.clear();
console.log(myHashSet.size()); // Output: 0
