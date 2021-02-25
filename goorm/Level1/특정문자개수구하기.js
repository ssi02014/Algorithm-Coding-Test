const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
  const str = input[0].split(" ");
	const N = input[1];
	let count = 0;
	
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].split("");
		for (let j = 0; j < str[i].length; j++) {
			if(str[i][j] === N) count++;
		}
	}
	
	console.log(count);
});