/**
 * Return an array of strings, containing every permutation of the given string.
 *
 * @param {string} string
 * @returns {Array}
 */
function permute(string) {
  return permuteArray(string.split(''));
}

function permuteArray(array) {
  switch (array.length) {
    case 0:
      return [];
    case 1:
      return array;
    default:
      return flatten(
        // eslint-disable-next-line prettier/prettier
        array.map(a => permuteArray(without(array, a)).map(b => a.concat(b)))
      );
  }
}

function flatten(array) {
  return array.reduce((a, b) => a.concat(b), []);
}

function without(array, a) {
  const bs = array.slice(0);
  bs.splice(array.indexOf(a), 1);
  return bs;
}

module.exports = permute;
