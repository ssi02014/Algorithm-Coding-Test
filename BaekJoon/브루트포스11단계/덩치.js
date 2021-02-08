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
    const students = [];
    const rankList = [];

    for (let i = 0; i < N; i++) { 
        students.push(input[i].split(" ").map(Number));
    }

    for (let i = 0; i < N; i++) {
        let rank = 1;
        for (let j = 0; j < N; j++) {
            if (i !== j) {
                if (students[i][0] < students[j][0] 
                    && students[i][1] < students[j][1]) rank++;
            }
        }
        rankList.push(rank);
    }
    console.log(compare.join(" "));
});