/**
 * Returns true or false, indicating whether the given number is prime.
 *
 * - We only need to check up to the square root of our number
 * - We use an iterative solution instead of a recursive one so we are not susceptible to stack overflows
 *
 * @param {number} n
 * @returns {boolean}
 */

/// solution

function isPrime(n) {
  return false;
}

/// tests

describe('isPrime', () => {
  it('should return "false"', () => {
    expect(isPrime(0)).toBe(false);
  });

  it('should return "false"', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('should return "true"', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('should return "false"', () => {
    expect(isPrime(9)).toBe(false);
  });

  it('should return "true"', () => {
    expect(isPrime(17)).toBe(true);
  });

  it('should return "false"', () => {
    expect(isPrime(25)).toBe(false);
  });

  it('should return "true"', () => {
    expect(isPrime(73)).toBe(true);
  });

  it('should return "false"', () => {
    expect(isPrime(10000000000000)).toBe(false);
  });
});
