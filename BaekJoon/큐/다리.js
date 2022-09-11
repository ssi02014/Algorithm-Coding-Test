const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [_, w, l] = input[0].split(" ").map(Number);
  const trucks = input[1].split(" ").map(Number);
  const truckQueue = Array(w).fill(0);
  let currentTruck = trucks.shift();
  let truckSum = 0;
  let result = 1;

  truckQueue.unshift(currentTruck);
  truckQueue.pop();

  truckSum += currentTruck;

  while (truckSum) {
    truckSum -= truckQueue.pop();
    currentTruck = trucks[0];

    if (truckSum + currentTruck <= l) {
      truckQueue.unshift(currentTruck);
      truckSum += trucks.shift();
    } else {
      truckQueue.unshift(0);
    }
    result++;
  }

  console.log(result);
});
