function naiveStringSearch(str, target) {
  let result = 0;

  for (let i = 0; i <= str.length - target.length; i++) {
    let temp = false;

    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) {
        temp = true;
        break;
      }
    }

    if (!temp) result++;
  }
  return result;
}

console.log(naiveStringSearch("wowomgzomg", "omg")); // 2
console.log(naiveStringSearch("lorie loled", "loled")); // 1
console.log(naiveStringSearch("lorie loled", "pop")); // 1
