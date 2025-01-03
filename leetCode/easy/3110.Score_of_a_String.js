/**
 * 3110. Score of a String
 * topic: string
 * @see https://leetcode.com/problems/score-of-a-string
 *
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  const asciiList = s.split("").map((char) => char.charCodeAt());
  let result = 0;

  for (let i = 0; i < asciiList.length - 1; i++) {
    const curAsciiCode = +asciiList[i];
    const nextAsciiCode = +asciiList[i + 1];
    result += Math.abs(curAsciiCode - nextAsciiCode);
  }

  return result;
};
