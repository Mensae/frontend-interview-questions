/**
 * Like the reduce you implemented in the Easy section, but each item must be
 * resolved before continuing onto the next.
 *
 * @param {Array} array
 * @param {Function} fn
 * @param {*} value
 * @returns {Promise<*>}
 */

/// solution

let reduceAsync = (array, fn, value) => {};

/// tests

describe('reduceAsync', () => {
  const a = () => Promise.resolve('a');
  const b = () => Promise.resolve('b');
  const c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

  it('#1', async () => {
    expect(
      await reduceAsync([a, b, c], (acc, value) => [...acc, value], []),
    ).toEqual(['a', 'b', 'c']);
  });

  it('#2', async () => {
    expect(
      await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']),
    ).toEqual(['d', 'a', 'c', 'b']);
  });
});
