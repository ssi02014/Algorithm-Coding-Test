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
    const inputList = [];
    let answer = '';
    
    //i를 배열에 넣어주는게 포인트
    for (let i = 0; i < N; i++) {
        inputList.push([parseInt(input[i].split(" ")[0]), input[i].split(" ")[1], i]);
    }

    inputList
        .sort((a, b) => a[0] - b[0] || a[2] - b[2])
        .forEach(list => answer += `${list[0]} ${list[1]}\n`);

    console.log(answer);
});