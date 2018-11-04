/**
 * Implement the debounce function.
 *
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 * @see {@link https://lodash.com/docs/4.17.4#debounce}
 */

/// solution

function debounce(fn, delay = 0) {
  return () => {};
}

/// tests

jest.useFakeTimers();

test('debounce', () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 100);

  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0);

  jest.advanceTimersByTime(101);
  expect(func).toHaveBeenCalledTimes(1);
});
