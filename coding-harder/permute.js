/**
 * Return an array of strings, containing every permutation of the given string.
 * @param {string} string
 * @returns {Array|*}
 */

/// solution

function permute(string) {
  return [];
}

/// tests

import { test } from 'ava';

test(t => t.deepEqual(permute(''), []));
test(t =>
  // eslint-disable-next-line prettier/prettier
  t.deepEqual(permute('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
);
