const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

class Node {
  constructor(x, y, block, time) {
    this.x = x;
    this.y = y;
    this.block = block;
    this.time = time;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(x, y, block, time) {
    let node = new Node(x, y, block, time);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  shift() {
    let temp = this.head;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return temp;
  }
  length() {
    return this.size;
  }
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const graph = input.slice(1).map((el) => el.split("").map(Number));
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => ({}))
  );

  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let result = -1;

  const isValid = (x, y) => {
    if (x < 0 || y < 0 || x >= n || y >= m) return false;
    return true;
  };

  const bfs = () => {
    const queue = new Queue();
    queue.push(0, 0, true, 1);

    while (queue.length()) {
      const curItem = queue.shift();
      const [x, y, block, time] = [
        curItem.x,
        curItem.y,
        curItem.block,
        curItem.time,
      ];

      if (x === n - 1 && y === m - 1) {
        result = time;
        break;
      }

      if (visited[x][y][block]) continue;
      visited[x][y][block] = true;

      for (let i = 0; i < moves.length; i++) {
        const [dx, dy] = moves[i];
        const [nx, ny] = [x + dx, y + dy];
        let [nBlock, nTime] = [block, time + 1];

        if (isValid(nx, ny)) {
          if (graph[nx][ny]) {
            if (!nBlock) continue;
            nBlock = false;
          }
          queue.push(nx, ny, nBlock, nTime);
        }
      }
    }
  };

  bfs();

  console.log(result);
});
