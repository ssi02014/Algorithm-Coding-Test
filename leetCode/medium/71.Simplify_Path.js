/**
 * 71. Simplify Path
 * topic: Stack, String
 * @see https://leetcode.com/problems/simplify-path
 *
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const splittedPath = path.replace(/\/+/g, "/").split("/");

  for (const path of splittedPath) {
    if (path === "." || path === "") continue;
    if (path === "..") {
      stack.pop();
      continue;
    }
    stack.push(path);
  }

  return `/${stack.join("/")}`;
};
