const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
	const stack = [];
	
	let dataInputCount = parseInt(input.shift());
	let pushAndPop = 0;
	let inputNum = 0;
  
	while (dataInputCount > 0) {
		pushAndPop = parseInt(input.shift());
		
		if (stack.length === 0) {
			if (pushAndPop === 1) {
				console.log('underflow');
				continue;
			}
		}
		
		if (stack.length >= 10) {
			if (pushAndPop === 0) {
				console.log('overflow');
				break;
			}
		}
		
		inputNum = parseInt(input.shift());
		
		if (pushAndPop === 0) stack.push(inputNum); 
		else if (pushAndPop === 1) stack.pop();
		else break;
		
		dataInputCount--;
	}
	
	if (stack.length > 0) {
		console.log(stack.join(" ") + " ");
	}
});