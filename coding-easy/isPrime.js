/**
 * Returns true or false, indicating whether the given number is prime.
 *
 * - We only need to check up to the square root of our number
 * - We use an iterative solution instead of a recursive one so we are not susceptible to stack overflows
 *
 * @param {number} n
 * @returns {boolean}
 */

/// solution

function isPrime(n) {
  return false;
}

/// tests

import { test } from 'ava';

test(t => t.is(isPrime(0), false));
test(t => t.is(isPrime(1), false));
test(t => t.is(isPrime(2), true));
test(t => t.is(isPrime(9), false));
test(t => t.is(isPrime(17), true));
test(t => t.is(isPrime(25), false));
test(t => t.is(isPrime(73), true));
test(t => t.is(isPrime(10000000000000), false));
