function isSubsequence(str1, str2) {
  let [i, j] = [0, 0];

  if (!str1) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// 두 포인터를 하나의 문자열에서만 다룰 필요 없음!

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

function isSubsequenceRecursive(str1, str2) {
  if (!str1.length) return true;
  if (!str2.length) return false;

  if (str1[0] === str2[0]) {
    return isSubsequenceRecursive(str1.slice(1), str2.slice(1));
  }
  return isSubsequenceRecursive(str1, str2.slice(1));
}
