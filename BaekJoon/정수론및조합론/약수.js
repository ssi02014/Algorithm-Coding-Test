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
  const divisor = [];

  for(let i = 0; i < N; i++) {
    divisor[i] = input[0].split(" ").map(Number)[i];
  }

  divisor.sort((a, b) => a - b);

  console.log(divisor[0] * divisor[N - 1]);
});