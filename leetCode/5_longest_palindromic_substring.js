var longestPalindrome = function (s) {
  let result = "";
  if (s.length <= 1) {
    return s;
  }

  for (let i = 0; i < s.length - 1; i++) {
    const temp = [result, expand(i, i + 1), expand(i, i + 2)].sort(
      (a, b) => b.length - a.length
    )[0];

    if (result.length < temp.length) {
      result = temp;
    }
  }

  return result;

  function expand(start, end) {
    while (start >= 0 && end <= s.length && s[start] === s[end - 1]) {
      start -= 1;
      end += 1;
    }
    return s.substring(start + 1, end - 1);
  }
};
console.log(longestPalindrome("babad"));
