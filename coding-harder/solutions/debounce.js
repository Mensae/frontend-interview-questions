/**
 * Implementation of the debounce function.
 *
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 * @see {@link https://lodash.com/docs/4.17.4#debounce}
 */
function debounce(fn, delay = 0) {
  // keep track of the last call to the debounced function
  let last = {
    time: null,
    timerId: null,
  };

  // return a debounced version of fn
  return () => {
    let time = Date.now();

    // if the debounced function was called again before the delay elapsed,
    // cancel the timer (started in the previous call) that would have called
    // fn, and start a new timer.
    if (last.time && time - last.time < delay) {
      clearTimeout(last.timerId);
    }

    // start a timer to call fn after the given delay
    last = {
      time,
      timerId: setTimeout(fn, delay),
    };
  };
}

module.exports = debounce;
