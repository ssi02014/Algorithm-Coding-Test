const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];
let counter = 0;

function primeNumer(n) {
    if (n < 2) return;
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return;
    }
    
    counter++;
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let N = parseInt(input.shift());
    let numberList = input.shift().split(" ").map(Number);

    for(let i = 0; i < N; i++) {
        primeNumer(numberList[i]);
    }
    console.log(counter);
});