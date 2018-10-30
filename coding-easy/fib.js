/**
 * fib - Returns the nth Fibonacci number.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fibonacci_number}
 */

/// solution

function fib(n) {
  return n;
}

/// tests

import { test } from 'ava';

test(t => t.is(fib(0), 0));
test(t => t.is(fib(1), 1));
test(t => t.is(fib(10), 55));
test(t => t.is(fib(20), 6765));
