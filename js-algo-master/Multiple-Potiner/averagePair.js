/*
  문제 설명
  AveragePair라는 함수를 작성하십시오. 
  정렬된 정수 배열과 목표 평균이 주어지면 배열에 쌍의 평균이 목표 평균과 같은 값 쌍이 있는지 확인합니다. 
  평균 목표와 일치하는 쌍이 두 개 이상 있을 수 있습니다.
*/

function solution(arr, num) {
  let [start, end] = [0, arr.length - 1];

  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2;

    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

console.log(solution([1, 2, 3], 2.5)); // true
console.log(solution([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(solution([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(solution([], 4)); // false
