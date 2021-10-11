const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, r] = input[0].split(" ").map(Number);
  const calc = input[1 + n].split(" ").map(Number);
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr[i - 1] = input[i].split(" ").map(Number);
  }

  function firstCalc() {
    for (let i = 0; i < arr.length - 1; i++) {
      [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
  }

  function secontCalc() {
    for (let i = 0; i < arr.length - 1; i++) {
      let reverseArr = [...arr[i]].reverse();
      arr[i] = reverseArr;
    }
  }

  function thirdCalc() {
    let newArr = Array.from(Array(arr[1].length), () =>
      Array(arr.length).fill(0)
    );

    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr[1].length; j++) {
        newArr[i][j] = arr[arr.length - 1 - j][i];
      }
    }
    arr = newArr;
  }

  function fourthCalc() {
    let newArr = Array.from(Array(arr[1].length), () =>
      Array(arr.length).fill(0)
    );

    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr[1].length; j++) {
        newArr[i][j] = arr[j][arr[1].length - 1 - i];
      }
    }
    arr = newArr;
  }

  function fifthCalc() {
    let oneArr = [];
    let twoArr = [];
    let threeArr = [];
    let fourArr = [];

    let middleHeightLength = Math.floor(arr.length / 2);
    let middleWidthLength = Math.floor(arr[1].length / 2) - 1;

    for (let i = 0; i < middleHeightLength; i++) {
      for (let j = 0; j < middleWidthLength; j++) {}
    }
  }

  function sixthCalc() {}
  console.log(arr);
});
