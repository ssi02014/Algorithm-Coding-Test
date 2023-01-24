// O(N)
function solution(str1, str2) {
  const obj = {};

  if (str1.length !== str2.length) return false;

  for (const el of str1) {
    obj[el] = (obj[el] || 0) + 1;
  }

  for (const el of str2) {
    if (!obj[el]) return false;
    obj[el]--;
  }

  return true;
}

console.log(solution("", "")); // true
console.log(solution("aaz", "zza")); // false
console.log(solution("anagram", "nagaram")); // true
console.log(solution("rat", "car")); // false
console.log(solution("awesome", "awesom")); // false
console.log(solution("qwerty", "qeywrt")); // true
console.log(solution("texttwisttime", "timetwisttext")); // true

/*
  solution("", "") // true
  solution("aaz", "zza") // false
  solution("anagram", "nagaram") // true
  solution("rat", "car") // false
  solution("awesome", "awesom") // false
  solution("qwerty", "qeywrt") // true
  solution("texttwisttime", "timetwisttext") // true
*/
