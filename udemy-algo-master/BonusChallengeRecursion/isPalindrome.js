function isPalindrome(str) {
  if (str[0] !== str[str.length - 1]) return false;
  if (str.length < 1) return true;

  return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
