const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const str = input.shift().split(" ");

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if(str[i] === "") count--;
    }
    
    console.log(count);
})