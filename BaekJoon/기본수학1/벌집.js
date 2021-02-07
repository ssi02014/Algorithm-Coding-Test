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
    let [count, range] = [1, 1];

    while (range < N) {
        range += count++ * 6;
    }
    console.log(count);
});