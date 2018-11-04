const isPrime = require('../isPrime');

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
