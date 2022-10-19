/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 

Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

function fibonacci(num) {
  const arr = [1, 1];

  if (num < 2) return 1;

  function recursive(i) {
    if (i === num) return;

    arr.push(arr[i - 1] + arr[i - 2]);
    recursive(i + 1);
  }

  recursive(2);

  return arr[num - 1];
}

console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55
console.log(fibonacci(28)); // 317811
console.log(fibonacci(35)); // 9227465

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

/*
  fib(4) = fib(3)          +         fib(2) 
           (fib(2) + fib(1))   +     1
           ((fib(0) + fib(1)) + 1) + 1
              1     +   1     + 1  + 1       
*/
