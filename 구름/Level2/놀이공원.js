const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];
let [N, K] = [0, 0];

function park(farm, y, x) {
	let count = 0;
	
	for (let i = y; i < y + K; i++) {
		for (let j = x; j < x + K; j++) {
			if (farm[i][j] === 1) count++;
		}
	}
	return count;
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
	const testCase = parseInt(input.shift());
	
	for (let i = 0; i < testCase; i++) {
		let farm = [];
		let result = [];
		
		[N, K] = input.shift().split(" ").map(Number);
		
		for (let j = 0; j < N; j++) {
			farm[j] = input.shift().split(" ").map(Number);
		}
		
		for (let k = 0; k + K - 1 < N; k++) {
			for (let z = 0; z + K - 1 < N; z++) {
				result.push(park(farm, k, z));
			}
		}
		console.log(Math.min(...result));
	}
});