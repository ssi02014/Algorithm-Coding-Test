const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  let N = parseInt(input[0]);
  let count = 1;
  let list = Array.from(Array(N).fill(0));


  for(let i = 2; i < N + 1; i++) {
    list[i] = list[i - 1] + 1;
      if(i % 2 === 0) {
        list[i] = Math.min(list[i], list[i / 2] + 1);
      }
      if(i % 3 === 0) {
          list[i] = Math.min(list[i], list[i / 3] + 1);
      }
      if(i % 5 === 0) {
          list[i] = Math.min(list[i], list[i / 5] + 1);
      }
  }
  console.log(list[N]);
});