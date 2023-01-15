// 투포인터
// maxCount가 queue1.length * 3인 이유는 테스트 예제 4 인 경우다.
// queue1.length * 2보다 count가 더 커는 케이스다.
function solution(queue1, queue2) {
  const totalArr = [...queue1, ...queue2];
  const maxCount = queue1.length * 3;
  const target = Math.floor(totalArr.reduce((acc, cur) => acc + cur, 0) / 2);

  let [pointer1, pointer2] = [0, queue1.length];
  let sum = queue1.reduce((acc, cur) => acc + cur, 0);
  let count = 0;

  while (count <= maxCount) {
    if (sum < target) {
      sum += totalArr[pointer2++];
    } else if (sum > target) {
      sum -= totalArr[pointer1++];
    } else if (sum === target) {
      return count;
    }
    count++;
  }

  return -1;
}
