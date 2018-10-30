/**
 * Takes an unsorted array of unique numbers (ie. no repeats) from 1 through
 * some number n, and returns the missing number in the sequence (there are
 * either no missing numbers, or exactly one missing number).
 * Can you do it in O(N) time? Hint: There’s a clever formula you can use.
 * @param array
 * @returns {number|undefined}
 */

/// solution

function missing(array) {
  return -1;
}

/// tests

import { test } from 'ava';

test(t => t.is(missing([]), undefined));
test(t => t.is(missing([1, 4, 3]), 2));
test(t => t.is(missing([2, 3, 4]), 1));
test(t => t.is(missing([5, 1, 4, 2]), 3));
test(t => t.is(missing([1, 2, 3, 4]), undefined));
