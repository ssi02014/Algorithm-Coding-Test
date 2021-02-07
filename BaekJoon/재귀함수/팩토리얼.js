const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let N = parseInt(input.shift());

    function factorial(a) {
        if(a < 1) return 1;
        return a * factorial(a - 1)
    }
    console.log(factorial(N))
});