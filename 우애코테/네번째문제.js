const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const str = input[0].split(" ");
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const charList = [];
    const reverseCharList = [];
    const literalChar = [];

    for (let j = 0; j < str[i].length; j++) {
      charList.push(str[i][j]);
      reverseCharList.push(str[i][str[i].length - j - 1]);

      if (charList.join("") !== reverseCharList.reverse().join("")) {
        reverseCharList.reverse();
      } else {
        reverseCharList.map((el) => {
          if (el === el.toUpperCase()) {
            literalChar.push(el.toLowerCase());
          } else if (el === el.toLowerCase()) {
            literalChar.push(el.toUpperCase());
          }
        });
        // if (str[i].length % literalChar === 0) {
        result.push(literalChar.join(""));
        // }
      }
    }
  }
  console.log(result.join(" "));

  // for (let i = 0; i < str.length; i++) {
  //   let obj = {};
  //   let charlist = [];
  //   let result = [];
  //   // let reg = str[i].split("").splice(0, 2).join("");
  //   // let index = str[i].indexOf(reg);

  //   // console.log(index);

  //   // console.log(reg);
  //   str[i].split("").map((el) => {
  //     obj[el] = 0;
  //   });

  //   str[i].split("").map((el) => {
  //     obj[el]++;
  //   });

  //   let minNum = Math.min(...Object.values(obj));

  //   for (let i = 0; i < Object.keys(obj).length; i++) {
  //     obj[Object.keys(obj)[i]] /= minNum;
  //   }

  //   for (let el in obj) {
  //     for (let i = 0; i < obj[el]; i++) {
  //       charlist.push(el);
  //     }
  //   }

  //   charlist.map((el) => {
  //     if (el === el.toUpperCase()) {
  //       result.push(el.toLowerCase());
  //     } else if (el === el.toLowerCase()) {
  //       result.push(el.toUpperCase());
  //     }
  //   });
  //   answer.push(result.join(""));
  // }
  // console.log(answer.join(" "));
});
