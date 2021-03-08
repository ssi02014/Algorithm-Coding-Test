const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  let [a, r, n] = input.shift().split(" ").map(Number);
  let result = [];

  result.push(a);

  for(let i = 0; i < n; i++) {
    a *= r;
    result.push(a);
  }
  console.log(result.splice(6, 1).join(""));
});