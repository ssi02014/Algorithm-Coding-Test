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
	let result = [];
	
	for (let i = 1; i <= N; i++) {
		let temp = [];
		
		temp.push(i);
		
		for (let j = i + N; j <= N * N; j += N) {
			temp.push(j);
		}
		
		result.push(temp.join(" ") + " ");
	}
	
	console.log(result.join("\n"));
});