const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const t = +input[0];

  const getDistance = (a, b) => {
    let result = 0;

    for (let i = 0; i < 4; i++) {
      if (a[i] !== b[i]) {
        result++;
      }
    }
    return result;
  };

  for (let i = 1; i <= t * 2; i += 2) {
    const n = input[i];
    const list = input[i + 1].split(" ");
    let result = Number.MAX_SAFE_INTEGER;

    /**
     * n이 33개 이상인 경우 반드시 거리가 0이다.
     * MBTI의 종류가 16개이기 때문에 최대한 멀게 하려고 해도 중복되는 3개가 존재하기 때문이다.
     */
    if (n > 32) {
      console.log(0);
      continue;
    }

    for (let i = 0; i < n - 2; i++) {
      for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
          const a = getDistance(list[i], list[j]);
          const b = getDistance(list[j], list[k]);
          const c = getDistance(list[i], list[k]);
          const sum = a + b + c;

          result = Math.min(result, sum);
        }
      }
    }

    console.log(result);
  }
});

/**
3
3
ENTJ INTP ESFJ
4
ESFP ESFP ESFP ESFP
5
INFP INFP ESTP ESTJ ISTJ
 */
