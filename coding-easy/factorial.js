/**
 * Factorial - Returns a number that is the factorial of the given number.
 *
 * The factorial function (symbol: !) says to multiply all whole numbers from
 * our chosen number down to 1.
 *
 * Examples:
 *  4! = 4 × 3 × 2 × 1 = 24
 *  7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
 *  1! = 1
 */

/// solution

function factorial(n) {
  return n;
}

/// tests

import { test } from 'ava';

test(t => t.is(factorial(0), 1));
test(t => t.is(factorial(1), 1));
test(t => t.is(factorial(6), 720));
