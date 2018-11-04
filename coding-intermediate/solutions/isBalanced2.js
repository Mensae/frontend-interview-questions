/**
 * Like the isBalanced function you implemented before, but supports 3 types of
 * braces: curly {}, square [], and round ().
 * A string with interleaving braces should return false.
 *
 * @param {string} string
 * @returns {boolean}
 */
function isBalanced2(string) {
  const stack = new Stack();

  for (let letter of string) {
    switch (letter) {
      case '{':
      case '[':
      case '(':
        stack.push(letter);
        break;
      case '}':
      case ']':
      case ')':
        if (pairOf(stack.peek()) === letter) {
          stack.pop();
        } else {
          return false;
        }
    }
  }

  return stack.size() === 0;
}

/**
 *
 * @type {{'(': string, '[': string, '{': string}}
 */
const pairs = {
  '(': ')',
  '[': ']',
  '{': '}',
};

/**
 *
 * @param {string} letter
 * @returns {string}
 */
function pairOf(letter) {
  return pairs[letter];
}

/**
 *
 */
class Stack {
  constructor() {
    this.items = [];
  }
  peek() {
    return this.items[this.size() - 1];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
}

module.exports = isBalanced2;
