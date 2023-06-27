const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, d, k, c] = input[0].split(" ").map(Number);
  const arr = input.slice(1).map(Number);
  const map = new Map();
  let [left, right] = [0, k - 1];
  let result = 0;

  arr
    .slice(0, k)
    .map(Number)
    .forEach((cur) => map.set(cur, (map.get(cur) || 0) + 1));

  // 쿠폰 추가
  map.set(c, (map.get(c) || 0) + 1);

  // 슬라이딩 윈도우
  while (left < n) {
    result = Math.max(result, map.size);

    // 현재 구간 내의 가장 왼쪽 접시를 제거
    map.set(arr[left], map.get(arr[left]) - 1);

    // 왼쪽 접시가 더이상 남아있지 않다면, Map에서 제거
    if (!map.get(arr[left])) {
      map.delete(arr[left]);
    }

    // 왼쪽, 오른쪽 포인터 이동
    left++;
    right++;

    // 현재 구간 내의 가장 오른쪽 접시를 추가
    map.set(arr[right % n], (map.get(arr[right % n]) || 0) + 1);
  }

  console.log(result);
});
