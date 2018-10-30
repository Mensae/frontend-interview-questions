/**
 * Implement the reduce function.
 * @param array
 * @param fn
 * @param value
 * @returns {*}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce}
 */

/// solution

function reduce(array, fn, value) {
  return value;
}

/// tests

import { test } from 'ava';

test(t => t.is(reduce([1, 2, 3, 4], (a, b) => a + b, 0), 10));
