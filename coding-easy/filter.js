/**
 * filter - Implement the filter function.
 *
 * @param array
 * @param fn
 * @returns {Array}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter}
 */

/// solution

function filter(array, fn) {
  return array;
}

/// tests

import { test } from 'ava';

test(t => t.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1, 2]));
