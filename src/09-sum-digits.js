/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n.toString().split('');
  let str2 = '';
  let sum;
  while (true) {
    str2 += str[0];
    console.log(str2);
    sum = parseInt(str[0], 10);
    for (let i = 1; i < str.length; i++) {
      str2 = `${str2} + ${str[i]}`;
      sum += parseInt(str[i], 10);
    }
    str2 = `${str2} = ${sum}`;
    if (sum < 10) {
      break;
    } else {
      str2 = `${str2}, `;
      str = sum.toString().split('');
    }
  }
  return sum;
}

module.exports = getSumOfDigits;
