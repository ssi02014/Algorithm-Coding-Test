Array.prototype.customMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const temp = callback(this[i], i, this);
    result[i] = temp;
  }
  return result;
};

Array.prototype.customFilter = function (callback) {
  const result = [];
  let current = 0;

  for (let i = 0; i < this.length; i++) {
    const temp = callback(this[i], i, this);
    if (temp) result[current++] = this[i];
  }

  return result;
};

Array.prototype.customEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const temp = callback(this[i], i, this);
    if (!temp) return false;
  }

  return true;
};

const temp1 = [1, 2, 3].customMap((el) => el ** 2);
const temp2 = ["hi", "bye", "hello"].customMap((el) => {
  const prefix = "minjae-";
  return prefix + el;
});

const temp3 = ["hi", "bye", "hello"].customMap((el, idx, arr) => {
  return [el, idx, arr];
});

console.log(temp1); // [ 1, 4, 9 ]
console.log(temp2); // [ 'minjae-hi', 'minjae-bye', 'minjae-hello' ]
console.log(temp3);
/*
  [
    [ 'hi', 0, [ 'hi', 'bye', 'hello' ] ],
    [ 'bye', 1, [ 'hi', 'bye', 'hello' ] ],
    [ 'hello', 2, [ 'hi', 'bye', 'hello' ] ]
  ]
*/

const temp4 = [1, 2, 3, 4, 5].customFilter((el) => el % 2 === 1);
const temp5 = ["hi", "abc", "apple", "bye", "amm"].customFilter((el) =>
  el.includes("a")
);

console.log(temp4); // [1, 3, 5]
console.log(temp5); // [ 'abc', 'apple', 'amm' ]

const temp6 = [1, 2, 3, 4, 5].customEvery((el) => el < 6);
const temp7 = [2, 4, 6, 8, 11].customEvery((el) => el % 2 === 1);

console.log(temp6); // true
console.log(temp7); // false
