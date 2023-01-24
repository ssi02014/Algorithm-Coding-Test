/*
(풀이)
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(arr) {
  let sum = 1;

  function recursive(i) {
    if (i === arr.length) return;
    sum *= arr[i];
    recursive(i + 1);
  }
  recursive(0);

  return sum;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

function solution(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
