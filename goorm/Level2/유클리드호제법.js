const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  let [N, M] = input[0].split(" ").map(Number);
	
	function gcd(a, b) {
		return b ? gcd(b, a % b) : a
	}
	
	console.log(gcd(N, M))
});