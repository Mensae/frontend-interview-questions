/**
 * Implement seq in terms of reduceAsync. seq takes an array of functions that
 * return promises, and resolves them one after the other.
 *
 * @param {Array} array
 * @returns {Promise<*>}
 */

/// solution

let seq = array => {};

/// tests

describe('seq', () => {
  const a = () => Promise.resolve('a');
  const b = () => Promise.resolve('b');
  const c = () => Promise.resolve('c');

  it('should pass #1', async () => {
    expect(await seq([a, b, c])).toEqual(['a', 'b', 'c']);
  });

  it('should pass #2', async () => {
    expect(await seq([a, c, b])).toEqual(['a', 'c', 'b']);
  });
});
