/**
 * 345. Reverse Vowels of a String (좋은 문제)
 * @topic Two Pointers, String
 * @see https://leetcode.com/problems/reverse-vowels-of-a-string
 *
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const regex = /a|e|i|o|u/i;
  const arr = s.split("");

  let start = 0;
  let end = arr.length - 1;

  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  while (start < end) {
    // 배열 앞에서부터 탐색하면서 vowels(a,e,i,o,u)에 해당하지 않으면 start 포인터 이동
    while (start < end && !regex.test(arr[start])) {
      start++;
    }

    // 배열 뒤에서부터 탐색하면서 vowels(a,e,i,o,u)에 해당하지 않으면 end 포인터 이동
    while (start < end && !regex.test(arr[end])) {
      end--;
    }

    // 요소 스왑
    swap(arr, start, end);

    // swap 후 포인터 이동
    start++;
    end--;
  }

  return arr.join("");
};
