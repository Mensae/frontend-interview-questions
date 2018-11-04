/**
 * reduceAsync
 *
 * @param {Array} array
 * @param {Function} fn
 * @param {*} value
 * @returns {Promise<*>}
 */
const reduceAsync = async (array, fn, value) => {
  for (let a of array) {
    value = fn(value, await a());
  }
  return value;
};

/**
 * seq - takes an array of functions that return promises, and resolves them one
 * after the other.
 *
 * @param {Array} array
 * @returns {Promise<*>}
 */
const seq = array => reduceAsync(array, (acc, value) => [...acc, value], []);

module.exports = seq;
