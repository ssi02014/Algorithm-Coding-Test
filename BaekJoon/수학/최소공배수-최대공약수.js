const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}
function lcm(a, b) {
    return a * b / gcd(a, b);
}

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  let [N, M] = input.shift().split(" ").map(Number);

  console.log(gcd(N, M));
  console.log(lcm(N, M));
});