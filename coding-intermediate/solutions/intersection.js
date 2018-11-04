/**
 * Find the intersection of two arrays. Can you do it in O(M+N) time (where M
 * and N are the lengths of the two arrays)?
 *
 * @param {Array} left
 * @param {Array} right
 * @returns {Array}
 */
function intersection(left, right) {
  // first build an object from the left array,
  // because checking if an object has a certain key
  // is cheap (it takes O(1) time).
  //
  // if we didn't use this object, we'd have to check
  // if result contains current on every turn of the
  // loop, which would take up to O(N * log(N)) time.
  let seen = left.reduce((seen, item) => {
    seen[item] = true;
    return seen;
  }, {});

  return right.reduce((result, current) => {
    if (current in seen) {
      return result.concat(current);
    }
    seen[current] = true;
    return result;
  }, []);
}

module.exports = intersection;
