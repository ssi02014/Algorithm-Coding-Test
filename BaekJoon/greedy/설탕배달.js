const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
    let N = parseInt(input[0]);
    let count = 0;

    while (true) {
        if (N % 5 === 0) {
            count += N / 5;
            console.log(count);
            break;
        }

        N -= 3;
        count++;

        if (N < 0) {
            console.log('-1');
            break;
        }
    }
});