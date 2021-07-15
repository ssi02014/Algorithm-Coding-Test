const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = input.shift();

  for (let i = 1; i <= T; i++) {
    const [p, n, arr] = input.splice(0, 3);

    const replaceArr = arr.replace(/[\[\]/]/g, "").split(",");

    console.log(replaceArr);
    // console.log(onReverseAndDrop(p, replaceArr));
  }

  function onReverseAndDrop(str, arr) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "R") {
        arr.reverse();
      } else if (str[i] === "D") {
        if (arr.length === 0) {
          return "error";
        } else {
          arr.shift();
        }
      }
    }
    return arr;
  }
});
