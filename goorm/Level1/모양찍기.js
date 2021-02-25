const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const N = parseInt(input[0]);
    let result = '';

    for (let i = N; i > 0; i--) {
        result = '*'.repeat(i);
        console.log(result);
    }
});