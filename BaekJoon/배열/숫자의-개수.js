const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const COMPARISON_LENGTH = 10;
const comparisonList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const N = parseInt(input[0]);
    const M = parseInt(input[1]);
    const X = parseInt(input[2]);

    const multipleNum = N * M * X;
    const multipleList = multipleNum.toString().split('');
    const answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < COMPARISON_LENGTH; i++) {
        for (let j = 0; j < COMPARISON_LENGTH; j++) {
            if (multipleList[i] === comparisonList[j]) answer[j] += 1;
        }
    }

    answer.forEach(el => console.log(el));
});
