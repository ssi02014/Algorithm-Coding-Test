/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;

  for (let el of s) {
    if (el === "(" || el === "{" || el === "[") {
      stack.push(el);
    } else {
      if (el === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          return false;
        }
      } else if (el === "}") {
        if (stack[stack.length - 1] === "{") {
          stack.pop();
        } else {
          return false;
        }
      } else if (el === "]") {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  return stack.length ? false : true;
};
