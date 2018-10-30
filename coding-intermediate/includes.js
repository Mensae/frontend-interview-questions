/**
 * Return true or false indicating whether the given number appears in the given
 * sorted array. Can you do it in O(log(N)) time?
 * @param {Array} array
 * @param {number} number
 * @returns {boolean}
 */

/// solution

function includes(array, number) {
  return false;
}

/// tests

import { test } from 'ava';

test(t => t.is(includes([1, 3, 8, 10], 8), true));
test(t => t.is(includes([1, 3, 8, 8, 15], 15), true));
test(t => t.is(includes([1, 3, 8, 10, 15], 9), false));
