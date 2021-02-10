const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
    input.push(line); 
}).on("close", function () { 
    const N = input.shift();
    const list = [];
    const compareObj = {};
    const modeList = [];

    let maxNum = 0;
    let mode = 0;
    

    for(let i = 0; i < N; i++) {
        list.push(parseInt(input[i]));
    }

    list.sort((a, b) => a - b);

    for (let i = 0; i < N; i++) {
        compareObj[list[i]] = 0;
    }

    for(let i = 0; i < N; i++) {
        compareObj[list[i]]++;
    }

    maxNum = Math.max(...Object.values(compareObj));

    for(let el in compareObj) {
        if (compareObj[el] === maxNum) modeList.push(parseInt(el));
    }
    
    modeList.sort((a, b) => a - b);

    if (modeList.length > 1) mode = modeList[1];
    else mode = modeList[0];

    console.log(Math.round(list.reduce((a, b) => a + b) / N));
    console.log(list[Math.floor(N / 2)]);
    console.log(mode);
    console.log(list[N - 1] - list[0]);
});