const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  let list = input[0].split(" ").map(Number);
	let result = 0;
	
	if (list.includes(1)) {
		if (list.includes(3)) {
			list.map(el => {
				if (el === 1) result++;	
			})
		} else if (list.includes(2)) {
			list.map(el => {
				if (el === 2) result++;
			})
		}
	}
	else if (list.includes(2)) {
		if (list.includes(3)) {
			list.map(el => {
				if (el === 3) result++;
			})
		}
	}
	
	if(list.includes(1) && list.includes(2) && list.includes(3)) {
		result = 0;
	}
	
	console.log(result)
});