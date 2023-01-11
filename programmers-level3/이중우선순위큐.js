function solution(operations) {
  const queue = [];
  const commandExec = {
    I: (value) => {
      queue.push(+value);
      queue.sort((a, b) => b - a);
    },
    D: (type) => {
      if (type === "1") queue.shift();
      else queue.pop();
    },
  };

  for (const operation of operations) {
    const [command, value] = operation.split(" ");
    const exec = commandExec[command];

    exec(value);
  }

  if (queue.length < 2) {
    return [0, 0];
  }
  return [queue[0], queue.at(-1)];
}
