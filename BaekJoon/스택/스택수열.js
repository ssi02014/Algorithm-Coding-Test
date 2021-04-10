const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  const N = parseInt(input.shift());
  const stack = [];
  const sequence = [];

  let result = [];
  let a = 1;

  for (let i = 0; i < N; i++) {
    sequence.push(parseInt(input[i]));
  };

  while(sequence.length !== 0) {
    if (stack[stack.length - 1] === sequence[0]) {
        sequence.shift();
        stack.pop();
        result.push('-');
    } else {
        stack.push(a);
        result.push('+');
        a++;
    }

    if (stack[stack.length - 1] > sequence[0]) {
        result = [];
        result.push('NO');
        break;
    }
  }

  console.log(result.join("\n"));
});