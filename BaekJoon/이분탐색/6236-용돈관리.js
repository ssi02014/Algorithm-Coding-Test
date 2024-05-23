/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/6236
 * 알고리즘: 이분탐색
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const moneyList = input.slice(1).map(Number);
  const totalSum = moneyList.reduce((acc, cur) => acc + cur, 0);

  let min = 1; // 인출 최소 금액
  let max = totalSum; // 인출 최대 금액

  let result = Number.MAX_SAFE_INTEGER;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2); // 인출 금액
    let restMoney = mid; // 남은 금액
    let count = 1; // 인출 횟수
    let pass = true;

    for (let i = 0; i < n; i++) {
      const dayMoney = moneyList[i]; // 하루 쓸 금액

      // 하루 쓸 금액이 "인출 금액"보다 큰 경우
      // 성립 불가 케이스
      if (dayMoney > mid) {
        pass = false;
        break;
      }

      // 하루 쓸 금액이 "남은 금액"보다 큰 경우
      // 인출 횟수 증가 케이스
      if (dayMoney > restMoney) {
        restMoney = mid;
        count += 1; // 인출 횟수 증가
      }
      restMoney -= dayMoney;
    }

    // 인출 횟수가 M보다 많거나 성립 안되는 케이스
    if (!pass || count > m) {
      min = mid + 1;
    } else {
      result = Math.min(mid, result);
      max = mid - 1;
    }
  }

  console.log(result);
});
