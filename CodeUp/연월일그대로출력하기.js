const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
    let yearMonthDay = input[0].split(".");
    let result = [];

    yearMonthDay.map(el => {
        if(el.length === 1) {
            let a = '0' + el;
            result.push(a);
        } else {
            result.push(el);
        }

    })

    console.log(result.join("."));
});