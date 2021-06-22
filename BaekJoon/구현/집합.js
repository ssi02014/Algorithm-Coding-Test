const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  let emptySet = {};
  let result = "";

  for (let i = 1; i <= N; i++) {
    const calculate = input[i].split(" ")[0];
    const num = parseInt(input[i].split(" ")[1]);

    switch(calculate) {
      case "add":
        emptySet[num] = 1;
        break;
      case "check":
        if (emptySet[num] === 1) result += "1" + '\n';
        else result += '0' + '\n';
        break;
      case 'remove':
        if (emptySet[num] === 1) emptySet[num] = 0;
        break;
      case 'toggle':
        if (emptySet[num] === 1) emptySet[num] = 0;
        else emptySet[num] = 1;
        break;
      case 'all':
        for(let i = 1; i <= 20; i++) {
          emptySet[i] = 1;
        }
        break;
      case 'empty':
        emptySet = {};
        break;
      default:
        break;
    }
  }

  console.log(result);
});
