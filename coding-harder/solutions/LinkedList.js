/**
 * Implementation of a LinkedList
 *
 * A LinkedList has 2 members, head and tail:
 * - head is a value
 * - tail is either another LinkedList, or null
 */
class LinkedList {
  constructor(head, ...tail) {
    this.head = head;
    this.tail = tail.length ? new LinkedList(...tail) : null;
  }

  add(item) {
    if (this.tail) {
      this.tail.add(item);
    } else {
      this.tail = new LinkedList(item);
    }
  }

  has(item) {
    if (this.head === item) {
      return true;
    }
    if (this.tail === null) {
      return false;
    }
    return this.tail.has(item);
  }
}

module.exports = LinkedList;
