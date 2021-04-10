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
  const stringList = [];
  let result = "";

  for(let i = 0; i < N; i++) {
    stringList[i] = input[i].split(" ");

    stringList[i].map(el => {
        result += el.split("").reverse().join("") + ' ';
    });
  }
  console.log(result);
});