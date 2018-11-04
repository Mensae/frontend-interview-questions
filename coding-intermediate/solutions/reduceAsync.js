/**
 * Like the reduce you implemented in the Easy section, but each item must be
 * resolved before continuing onto the next.
 *
 * @param {Array} array
 * @param {Function} fn
 * @param {*} value
 * @returns {Promise<*>}
 */
let reduceAsync = async (array, fn, value) => {
  for (let a of array) {
    value = fn(value, await a());
  }
  return value;
};

module.exports = reduceAsync;
