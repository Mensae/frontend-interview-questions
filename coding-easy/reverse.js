/**
 * Reverses the given string (yes, using the built in reverse function is
 * cheating).
 *
 * Note: This solution aims for clarity, but does not give correct results when
 * given unicode characters from the supplementary planes (including Chinese
 * characters, emojis, etc.). See discussion here:
 * @see {@link https://github.com/bcherny/frontend-interview-questions/issues/6}
 * @param string
 * @returns {string}
 */

/// solution

function reverse(string) {
  return string;
}

/// tests

import { test } from 'ava';

test(t => t.is(reverse(''), ''));
test(t => t.is(reverse('abcdef'), 'fedcba'));
