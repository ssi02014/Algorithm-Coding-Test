// Run by Node.js
const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
	const n = parseInt(input.shift());
	const sam = []
	
	let count = 0;
	for (let i = 0; i < n; i++) {
		sam.push(i.toString());
	}
	
	sam.forEach(el => {
		for (let i = 0; i < el.length; i++) {
			if (el[i] === '3' || el[i] === '6' || el[i] === '9') count++;
		}
	});
	console.log(count);
});

