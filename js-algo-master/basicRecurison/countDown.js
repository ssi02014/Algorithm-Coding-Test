function countDown(num) {
  if (num < 1) {
    console.log("All done!");
    return;
  }
  console.log(num);
  countDown(--num);
}

console.log(countDown(5));
