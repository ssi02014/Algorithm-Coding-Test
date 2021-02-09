const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];
const result = [];

function primeNumer(n) {
    if (n < 2) return;

    for (let i = 2; i < n; i++) {
        if ( n % i === 0) return;
    }

    result.push(n);
}

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const start = parseInt(input.shift());
    const end = parseInt(input.shift());
    const numberList = [];

    for(let i = start; i <= end; i++) {
        numberList.push(i);
    }
    
    for(let i = 0; i < numberList.length; i++) {
        primeNumer(numberList[i]);
    }

    if(result.length >= 1) {
        console.log(result.reduce((a ,b) => a + b));
        console.log(Math.min(...result));
    } else console.log(-1);
    
});