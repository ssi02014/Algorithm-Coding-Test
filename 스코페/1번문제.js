const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = parseInt(input[0]);
  let times = input.slice(1);
  let temp = [];
  let startTime = "";
  let endTime = "";

  times.map((el) => {
    while (true) {
      const matcher = el.match(":");

      if (matcher) el = el.replace(":", "");
      else break;
    }

    temp.push(el.split(" ~ ").map(Number));
  });

  temp.sort((a, b) => b[0] - a[0]);

  if (temp[0][0].toString().length === 4) {
    startTime = [
      temp[0][0].toString().slice(0, 2),
      ":",
      temp[0][0].toString().slice(2),
    ].join("");
  } else if (temp[0][0].toString().length === 3) {
    startTime = [
      "0" + temp[0][0].toString().slice(0, 1),
      ":",
      temp[0][0].toString().slice(1),
    ].join("");
  } else if (temp[0][0].toString().length === 2) {
    startTime = [
      "00" + temp[0][0].toString().slice(0, 0),
      ":",
      temp[0][0].toString().slice(0),
    ].join("");
  } else {
    startTime = [
      "00" + temp[0][0].toString().slice(0, 0),
      ":0",
      temp[0][0].toString().slice(0),
    ].join("");
  }

  temp.sort((a, b) => a[1] - b[1]);

  if (temp[0][1].toString().length === 4) {
    endTime = [
      temp[0][1].toString().slice(0, 2),
      ":",
      temp[0][1].toString().slice(2),
    ].join("");
  } else if (temp[0][1].toString().length === 3) {
    endTime = [
      "0" + temp[0][1].toString().slice(0, 1),
      ":",
      temp[0][1].toString().slice(1),
    ].join("");
  } else if (temp[0][1].toString().length === 2) {
    endTime = [
      "00" + temp[0][1].toString().slice(0, 0),
      ":",
      temp[0][1].toString().slice(0),
    ].join("");
  } else {
    endTime = [
      "00" + temp[0][1].toString().slice(0, 0),
      ":0",
      temp[0][1].toString().slice(0),
    ].join("");
  }

  if (
    parseInt(startTime.replace(":", "")) >= parseInt(endTime.replace(":", ""))
  ) {
    console.log(-1);
  } else {
    console.log(`${startTime} ~ ${endTime}`);
  }
});
