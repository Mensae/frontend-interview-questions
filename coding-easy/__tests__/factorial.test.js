const factorial = require('../factorial');

test('factorial', () => {
  expect(factorial(0)).teBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(6)).toBe(720);
});
