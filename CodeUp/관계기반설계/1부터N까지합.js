const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];
let sum = 0;

function recursion(n) {
    if(n < 1) return;
    sum += n;
    recursion(n - 1);
}

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  let N = parseInt(input[0]);

  recursion(N);
  console.log(sum);
});