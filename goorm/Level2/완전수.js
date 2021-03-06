const readline = require("readline"); 
const rl = readline.createInterface({ 
	input: process.stdin, 
	output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
	input.push(line); 
}).on("close", function () { 
	const [N, M] = input[0].split(" ").map(Number);
	let temp = [];
	let result = [];
	let num = 0;
	let sum = 0;
	
	for (let i = N; i <= M; i++) {
		temp = [];

		for (let j = 1; j <= i; j++) {
			if (i % j === 0) temp.push(j);
		}

		num = temp.pop();

		if (temp.length > 0) sum = temp.reduce((a, b) => a + b);
		if (num === sum) result.push(num);
	}
	console.log(result.join(" ") + " ");
});