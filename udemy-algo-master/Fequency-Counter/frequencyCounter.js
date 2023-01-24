// O(N)
function solution(arr1, arr2) {
  const obj = {};

  if (arr1.length !== arr2.length) return false;

  for (const el of arr1) {
    obj[el ** 2] = (obj[el ** 2] || 0) + 1;
  }

  for (const el of arr2) {
    if (!obj[el]) return false;
    obj[el]--;
  }

  return true;
}

console.log(solution([1, 2, 3], [4, 1, 9])); // true
console.log(solution([1, 2, 1], [4, 4, 1])); // false
console.log(solution([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log(solution([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])); // false

// O(N^2)
function lecture(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (const el of arr1) {
    const correctIdx = arr2.indexOf(el ** 2);

    if (correctIdx === -1) return false;
    arr2.splice(correctIdx, 1);
  }

  return true;
}

// O(N)
function refactoringLecture(arr1, arr2) {
  const obj1 = {};
  const obj2 = {};

  if (arr1.length !== arr2.length) return false;

  for (const el of arr1) {
    obj1[el] = (obj1[el] || 0) + 1;
  }

  for (const el of arr2) {
    obj2[el] = (obj2[el] || 0) + 1;
  }

  for (const key in obj1) {
    if (!(key ** 2 in obj2)) return false;
    if (obj1[key] !== obj2[key ** 2]) return false;
  }

  return true;
}
