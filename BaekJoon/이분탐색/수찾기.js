// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   const n = parseInt(input[0]);
//   const nList = input[1]
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   const m = parseInt(input[2]);
//   const mList = input[3].split(" ").map(Number);
//   let result = "";

//   for (let i = 0; i < m; i++) {
//     let first = 0;
//     let last = m - 1;
//     let checked = false;

//     while (first <= last) {
//       let mid = Math.floor((first + last) / 2);

//       if (nList[mid] === mList[i]) {
//         checked = true;
//         break;
//       } else {
//         if (nList[mid] < mList[i]) first = mid + 1;
//         else if (nList[mid] > mList[i]) last = mid - 1;
//       }
//     }

//     if (checked) result += "1" + "\n";
//     else result += "0" + "\n";
//   }
//   console.log(result);
// });

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = parseInt(input[0]);
  const nSet = new Set(input[1].split(" "));
  const m = parseInt(input[2]);
  const mList = input[3].split(" ");
  let result = [];

  mList.map((el) => {
    nSet.has(el) ? result.push(1) : result.push(0);
  });

  console.log(result.join("\n"));
});
