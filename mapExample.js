// const items = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const items = [1, 2, 3, 4, 5];

const newItems = items.map((item) => item + 1).map((item) => item * 2);

console.log(newItems); // [4, 6, 8, 10, 12]
