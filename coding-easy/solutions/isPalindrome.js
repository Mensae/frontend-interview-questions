/**
 * Return true or false indicating whether the given string is a palindrome
 * (case and space insensitive).
 *
 * @param {string} string
 * @returns {boolean}
 */
function isPalindrome(string) {
  let _string = string.replace(/\s/g, '').toLowerCase();
  return reverse(_string) === _string;
}

/**
 * Reverse a string
 * @param {string} string
 * @returns {string}
 */
function reverse(string) {
  return string
    .split('')
    .reverse()
    .join('');
}

module.exports = isPalindrome;
