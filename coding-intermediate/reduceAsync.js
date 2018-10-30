/**
 * Like the reduce you implemented in the Easy section, but each item must be
 * resolved before continuing onto the next.
 * @param {Array} array
 * @param {Function} fn
 * @param {*} value
 * @returns {Promise<*>}
 */

/// solution

let reduceAsync = (array, fn, value) => {};

/// tests

import { test } from 'ava';

test(async t => {
  let a = () => Promise.resolve('a');
  let b = () => Promise.resolve('b');
  let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));

  t.deepEqual(
    await reduceAsync([a, b, c], (acc, value) => [...acc, value], []),
    ['a', 'b', 'c'],
  );
  t.deepEqual(
    await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']),
    ['d', 'a', 'c', 'b'],
  );
});
