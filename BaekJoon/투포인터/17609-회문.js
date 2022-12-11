const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const getRemovedCharStr = (curStr, idx1, idx2) => {
  return curStr.slice(0, idx1) + curStr.slice(idx2);
};

const getIsPalindromeWithIdx = (arr) => {
  const mid = Math.floor(arr.length / 2);

  for (let i = 0; i <= mid; i++) {
    const endIdx = arr.length - i - 1;

    if (arr[i] !== arr[endIdx]) {
      return [false, i, endIdx];
    }
  }

  return [true, null, null];
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const strArr = input.slice(1);
  let result = "";

  for (const curStr of strArr) {
    const [isPalindromeCurStr, leftIdx, rightIdx] =
      getIsPalindromeWithIdx(curStr);

    const removedLeftCharStr =
      !isPalindromeCurStr && getRemovedCharStr(curStr, leftIdx, leftIdx + 1);
    const removedRightCharStr =
      !isPalindromeCurStr && getRemovedCharStr(curStr, rightIdx, rightIdx + 1);

    if (isPalindromeCurStr) {
      result += "0\n";
      continue;
    }

    const [isPalindromeRemovedLeftCharStr] =
      getIsPalindromeWithIdx(removedLeftCharStr);
    const [isPalindromeRemovedRightCharStr] =
      getIsPalindromeWithIdx(removedRightCharStr);

    if (isPalindromeRemovedLeftCharStr || isPalindromeRemovedRightCharStr) {
      result += "1\n";
    } else {
      result += "2\n";
    }
  }

  console.log(result);
});
