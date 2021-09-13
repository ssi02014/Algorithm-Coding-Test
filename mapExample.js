const items = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

items.map((item) => {
  console.log("item", item);

  item.map((i) => {
    console.log("i", i);
  });
});
