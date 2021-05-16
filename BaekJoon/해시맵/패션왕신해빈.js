const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input.shift());

  for (let i = 0; i < N; i++) {
    const M = parseInt(input.shift());
    const clothes = input.splice(0, M);

    let obj = {};
    let result = 1;

    for (let j = 0; j < clothes.length; j++) {
      const costumeType = clothes[j].split(" ")[1];

      if (!obj[costumeType]) obj[costumeType] = 2;
      else obj[costumeType]++;
    }

    Object.values(obj).map((el) => (result *= el));

    console.log(result - 1);
  }
});
