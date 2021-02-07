const { parse } = require("path");
const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const inputNum = parseInt(input.shift());
    const constructor = [];
    
    let disassemblySum = 0;
    let strValue = '';

    for (let i = 1; i < inputNum; i++) {
        disassemblySum = i;

        strValue = i.toString();

        for (let j = 0; j < strValue.length; j++) {
            disassemblySum += parseInt(strValue[j]);
        }

        if (disassemblySum === inputNum) constructor.push(i);
    }
    console.log(constructor.sort((a, b) => a - b)[0]);
});