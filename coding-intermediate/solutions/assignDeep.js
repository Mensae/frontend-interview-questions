/**
 * Like Object.assign, but merges objects deeply. For the sake of simplicity,
 * you can assume that objects can contain only numbers and other objects (and
 * not arrays, functions, etc.).
 *
 * @param {Object} target
 * @param {Object} sources
 * @returns {Object}
 */
function assignDeep(target, ...sources) {
  for (let source of sources) {
    for (let key in source) {
      if (isObject(source[key])) {
        if (!isObject(target[key])) {
          target[key] = {};
        }
        assignDeep(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

/**
 *
 * @param {*} a
 * @returns {boolean}
 */
function isObject(a) {
  return typeof a === 'object' && a !== null;
}

module.exports = assignDeep;
