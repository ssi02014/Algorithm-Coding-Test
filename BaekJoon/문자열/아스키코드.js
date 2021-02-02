const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

let input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    let ascii = input.shift();

    console.log(ascii.charCodeAt(0));
})