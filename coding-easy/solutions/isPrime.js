/**
 * Returns true or false, indicating whether the given number is prime.
 *
 * This is a lightly optimized version of a naive primality test. We make a
 * couple of optimizations:
 *
 * - We only need to check up to the square root of our number
 * - We use an iterative solution instead of a recursive one so we are not
 *   susceptible to stack overflows
 *
 * Note: that much more efficient solutions exist, but are harder to understand.
 * Eg. Google "AKS primality test".
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.ceil(Math.sqrt(n)) + 1; i += 1) {
    if (n % i === 0 && i !== n) {
      return false;
    }
  }

  return true;
}

module.exports = isPrime;
