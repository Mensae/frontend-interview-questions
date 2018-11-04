const fib2 = require('../fib2');

describe('fib2', () => {
  it('should return 0', () => {
    expect(fib2(0)).toBe(0);
  });

  it('should return 1', () => {
    expect(fib2(1)).toBe(1);
  });

  it('should return 55', () => {
    expect(fib2(10)).toBe(55);
  });

  it('should return 12586269025', () => {
    expect(fib2(50)).toBe(12586269025);
  });
});
