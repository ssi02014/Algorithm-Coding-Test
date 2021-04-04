const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = parseInt(input.shift());
  let timeList = [];
  let count = 0;
  let time = 0;

  for (let i = 0; i < input.length; i++) {
    timeList[i] = input[i].split(" ").map(Number);
  }

  timeList.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  timeList.map((el) => {
    if (time <= el[0]) {
      count += 1;
      time = el[1];
    }
  });

  console.log(count);

  // usedTime.push(room[0]);

  // for (let i = 1; i < room.length; i++) {
  //   let prevTime = usedTime[0];
  //   let currentTime = room[i];

  //   if (prevTime[1] <= currentTime[0] && !usedTime.includes(currentTime)) {
  //     usedTime.pop();
  //     usedTime.push(currentTime);
  //     count++;
  //   } else continue;
  // }
});
