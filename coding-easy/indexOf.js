/**
 * Implement the indexOf function for arrays.
 * @param array
 * @param item
 * @returns {number}
 * @see {@link https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf}
 */

/// solution

function indexOf(array, item) {
  return -1;
}

/// tests

import { test } from 'ava';

test(t => t.is(indexOf([1, 2, 3], 1), 0));
test(t => t.is(indexOf([1, 2, 3], 4), -1));
