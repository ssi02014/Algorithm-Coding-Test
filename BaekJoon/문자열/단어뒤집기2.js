const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  const str = input[0].split("");
  const result = [];
  const stack = [];

  let tag = false;

  str.map(el => {
    if (el === "<") {
      tag = true;

      while (stack.length !== 0) {
        result.push(stack.pop());
      }
        result.push(el);
    } 
    else if (el === ">") {
      tag = false;
      result.push(el);
    } 
    else if (tag) {
      result.push(el);
    }
    else {
      if (el === " ") {
        while (stack.length !== 0) {
          result.push(stack.pop());
        }
        result.push(el);

      } else {
        stack.push(el);
      }
    }
  });

  while (stack.length !== 0) {
    result.push(stack.pop());
  }

  console.log(result.join(""));
});