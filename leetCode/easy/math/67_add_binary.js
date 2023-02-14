/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const bigIntA = BigInt(`0b${a}`);
  const bigIntB = BigInt(`0b${b}`);

  return (bigIntA + bigIntB).toString(2);
};
