/**
 * Implementation of a HashMap class without using JavaScript’s built-in
 * objects ({}) or Maps.
 */
class HashMap {
  constructor() {
    this.data = [];
  }
  get(key) {
    const index = hash(key);
    const slot = this.data[index];
    if (!slot) {
      return undefined;
    }
    for (let [k, v] of slot) {
      if (key === k) {
        return v;
      }
    }
  }
  set(key, value) {
    const index = hash(key);

    if (!this.data[index]) {
      this.data[index] = [];
    }

    let slot = this.data[index];
    let indexInSlot = 0;

    // find available index in the given slot, or overwrite the given key
    // if a value is already defined for it.
    while (slot[indexInSlot]) {
      if (slot[indexInSlot][0] === key) {
        break;
      }
      indexInSlot++;
    }

    slot[indexInSlot] = [key, value];
  }
}

// hash function (provided)
function hash(string) {
  return string
    .split('')
    .reduce((a, b) => (a << 5) + a + b.charCodeAt(0), 5381);
}

module.exports = HashMap;
