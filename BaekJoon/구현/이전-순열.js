const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const arr = input[1].split(" ").map(Number);
  let prefixArr = [];
  let suffixArr = [];

  // arr배열 뒤쪽에서부터 두 자리씩 앞자리가 큰 수가 나타날 때까지 탐색
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i - 1] > arr[i]) {
      prefixArr = arr.slice(0, i);
      suffixArr = arr.slice(i);
      break;
    }
  }

  // 바꿀 요소가 없으니 -1 return
  if (!prefixArr.length) return console.log(-1);

  const prefixLastIdx = prefixArr.length - 1;

  for (let i = suffixArr.length - 1; i >= 0; i--) {
    if (prefixArr[prefixLastIdx] > suffixArr[i]) {
      // swap
      [prefixArr[prefixLastIdx], suffixArr[i]] = [
        suffixArr[i],
        prefixArr[prefixLastIdx],
      ];
      break;
    }
  }

  console.log([...prefixArr, ...suffixArr.sort((a, b) => b - a)].join(" "));
});

/**
  해당 문제는 뒤에서부터 2자리씩 앞자리가 큰 수가 나올 때가지 arr을 탐색한다. 
  (예를 들어 [3, 4, 1, 2, 5] 라면 4와 1)

  만약 앞자리가 큰 수가 없다면 가장 처음에 오는 순열([1, 2, 3, 4)이기 때문에 그냥 -1을 출력한다.

  그리고 탐색한 인덱스(4는 인덱스가 2임)를 기준으로 prefix와 suffix를 나눈다. ([3, 4], [1, 2, 5]) 그리고 prefix의 마지막 요소와 suffix의 뒤에 요소부터 차례대로 비교하는데 이때, prefix 마지막 요소가 suffix 요소보다 큰 경우가 생기면 suffix 비교 요소와 swap한다.

  예를 들어, ([3, 4], [1, 2, 5]) 에서 4와 5를 비교하면 5가 크다. 따라서 패스하고 그 다음, 4와 2는 4가 2보다 크다. 따라서 2와 4를 스왑한다. ([3, 2], [1, 4, 5])

  그리고 최종적으로 suffix를 내림차순으로 정렬하고 이어붙이면 끝! ([3, 2, 5, 4, 1])
 */
