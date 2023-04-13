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
  const waiting = input[1].split(" ").map(Number);
  const result = [];

  let sum = 0;

  waiting.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    sum += waiting[i];
    result.push(sum);
  }
  
  console.log(result.reduce((a , b) => a + b));
});