/**
 * Note: We put the recursive call in tail position, so
 * that it can be optimized by the JavaScript compiler.
 *
 * A tail-recursive function is just a function whose very last action is a call
 * to itself. When you write your recursive function in this way, the compiler
 * can optimize the resulting bytecode so that the function requires only one
 * stack frame — as opposed to one stack frame for each level of recursion!
 *
 * @see {@link https://en.wikipedia.org/wiki/Tail_call}
 */

/// solution

function tailFactorial(n, total) {
  switch (n) {
    case 0:
      return 1;
    case 1:
      return total;
    default:
      return tailFactorial(n - 1, n * total);
  }
}

function factorial(n) {
  return tailFactorial(n, 1);
}

module.exports = factorial;
