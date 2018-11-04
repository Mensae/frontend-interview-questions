const reduce = require('../reduce');

test('reduce', () => {
  expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);
});
