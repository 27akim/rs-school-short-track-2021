/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const m1 = s1.split('');
  const m2 = s2.split('');
  let res = 0;

  for (let i = 0; i < m1.length; i++) {
    if (m2.includes(m1[i])) {
      res++;
      m2.splice(m2.indexOf(m1[i]), 1);
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
