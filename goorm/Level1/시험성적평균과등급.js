const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
	const pointList = input.shift().split(" ").map(Number);
	
	let result = 0;
	let rank = '';
	
	result = pointList.reduce((a, b) => a + b) / pointList.length;
	
	if (result >= 90) rank = 'A';
	else if (result >= 80) rank = 'B';
	else if (result >= 70) rank = 'C';
	else if (result >= 60) rank = 'D';
	else rank = 'F';
	
	console.log(result.toFixed(2), rank);
});
