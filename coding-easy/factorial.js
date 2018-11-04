/**
 * Factorial - Returns a number that is the factorial of the given number.
 *
 * The factorial function (symbol: !) says to multiply all whole numbers from
 * our chosen number down to 1.
 *
 * Examples:
 *  4! = 4 × 3 × 2 × 1 = 24
 *  7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
 *  1! = 1
 */

/// solution

function factorial(n) {
  return n;
}

/// tests

test('factorial', () => {
  expect(factorial(0)).teBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(6)).toBe(720);
});
