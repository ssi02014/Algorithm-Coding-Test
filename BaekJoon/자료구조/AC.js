const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = parseInt(input[0]);

  for (let i = 0; i < T; i++) {
    const [p, n, arr] = input.splice(1, 3);

    const replaceArr = arr
      .replace(/[\[\]\]/]/g, "")
      .split(",")
      .filter((el) => el !== "");

    console.log(onReverseAndDrop(p, replaceArr)); //정답 제출
  }

  function onReverseAndDrop(str, arr) {
    for (let i = 0; i < str.length; i++) {
      let count = 0;

      if (str[i] === "R") count++;
      else {
        if (arr.length === 0) return "error";
        if (count % 2 === 0) arr.shift();
        else arr.pop();
      }

      if (count % 2 === 1) arr.reverse();
    }
    return "[" + arr.join(",") + "]";
  }
});
