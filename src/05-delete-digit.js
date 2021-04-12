/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let max = parseInt(str.slice(0, 0) + str.slice(1), 10);
  let temp;
  for (let i = 1; i < str.length; i++) {
    temp = str.slice(0, i) + str.slice(i + 1);
    const number = parseInt(temp, 10);
    if (number > max) {
      max = number;
    }
  }
  return max;
}

module.exports = deleteDigit;
