/**
 * Implement seq in terms of reduceAsync. seq takes an array of functions that
 * return promises, and resolves them one after the other.
 * @param {Array} array
 * @returns {Promise<*>}
 */

/// solution

let seq = array => {};

/// tests

import { test } from 'ava';

test(async t => {
  let a = () => Promise.resolve('a');
  let b = () => Promise.resolve('b');
  let c = () => Promise.resolve('c');

  t.deepEqual(await seq([a, b, c]), ['a', 'b', 'c']);
  t.deepEqual(await seq([a, c, b]), ['a', 'c', 'b']);
});
