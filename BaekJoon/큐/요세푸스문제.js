const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
    const [N, K] = input[0].split(" ").map(Number);
    const queue = [];
    const result = [];

    for(let i = 1; i < N + 1; i++) {
        queue.push(i);
    }

    let count = 0;
    while(queue.length !== 0) {
        count++;
        
        if (count !== K) queue.push(queue.shift());
        else {
            result.push(queue.shift());
            count = 0;
        }
    }

    console.log(`<${result.join(", ")}>`);
});