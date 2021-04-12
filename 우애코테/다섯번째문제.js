const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = input[0].split(" ");
  let desktop = {
    삼성: [],
    애플: [],
    한성: [],
    레노버: [],
    LG: [],
    아수스: [],
    기타: [],
  };

  N.map((el) => {
    if (el.split("")[0] === "1") {
      if (el.split("").length === 4) {
        desktop["삼성"].push(parseInt(el));
        desktop["삼성"].sort((a, b) => a - b);
      }
    } else if (el.split("")[0] === "2") {
      desktop["애플"].push(parseInt(el));
      desktop["애플"].sort((a, b) => a - b);
    } else if (el.split("")[0] === "3") {
      desktop["한성"].push(parseInt(el));
      desktop["한성"].sort((a, b) => a - b);
    } else if (el.split("")[0] === "4") {
      desktop["레노버"].push(parseInt(el));
      desktop["레노버"].sort((a, b) => a - b);
    } else if (el.split("")[0] === "5") {
      desktop["LG"].push(parseInt(el));
      desktop["LG"].sort((a, b) => a - b);
    } else if (el.split("")[0] === "6") {
      desktop["아수스"].push(parseInt(el));
      desktop["아수스"].sort((a, b) => a - b);
    } else {
      desktop["기타"].push(parseInt(el));
      desktop["기타"].sort((a, b) => a - b);
    }
  });
  console.log(desktop);
});
