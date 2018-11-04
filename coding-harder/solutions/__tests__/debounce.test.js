const debounce = require('../debounce');

jest.useFakeTimers();

test('debounce', () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 100);

  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0);

  jest.advanceTimersByTime(101);
  expect(func).toHaveBeenCalledTimes(1);
});
