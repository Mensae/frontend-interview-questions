/**
 * Like the fib function you implemented above, able to handle numbers up to 50
 * (hint: look up memoization).
 */

/// solution

/// tests

import { test } from 'ava';

test(t => t.is(fib2(0), 0));
test(t => t.is(fib2(1), 1));
test(t => t.is(fib2(10), 55));
test(t => t.is(fib2(50), 12586269025));
