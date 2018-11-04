/**
 * fib - Returns the nth Fibonacci number.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fibonacci_number}
 */

/// solution

function fib(n) {
  return n;
}

/// tests

describe('Fibonacci', () => {
  it('should return 0', () => {
    expect(fib(0)).toEqual(0);
  });

  it('should return 1', () => {
    expect(fib(1)).toEqual(1);
  });

  it('should return 55', () => {
    expect(fib(10)).toEqual(55);
  });

  it('should return 6765', () => {
    expect(fib(20)).toEqual(6765);
  });
});
