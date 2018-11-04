/**
 * Returns the nth Fibonacci number.
 *
 * @param {number} n
 * @returns {number}
 * @see {@link https://en.wikipedia.org/wiki/Fibonacci_number}
 */
function fib(n) {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fib(n - 1) + fib(n - 2);
  }
}

module.exports = fib;
