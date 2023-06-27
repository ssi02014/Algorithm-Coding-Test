// answer1
function solution(numbers) {
  const numberList = numbers.split("");
  const numSet = new Set();
  let answer = 0;

  const getIsPrime = (n) => {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  const dfs = (current, numberList) => {
    if (current.length) {
      const isHasNum = numSet.has(+current);

      if (!isHasNum) {
        numSet.add(+current);

        if (getIsPrime(+current)) {
          answer++;
        }
      }
    }

    for (let i = 0; i < numberList.length; i++) {
      const tempArr = [...numberList];

      tempArr.splice(i, 1);
      dfs(current + numberList[i], tempArr);
    }
  };

  dfs("", numberList);

  return answer;
}

// answer2

const isPrimeNumber = (x) => {
  if (x === 0 || x === 1) return false;

  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
};

function solution(numbers) {
  const visited = Array.from({ length: numbers.length }, () => false);
  const numSet = new Set();

  const dfs = (target) => {
    const isHasNum = numSet.has(+target);

    if (!isHasNum) {
      if (isPrimeNumber(+target)) {
        numSet.add(+target);
      }
    }

    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(target + numbers[i]);
        visited[i] = false;
      }
    }
  };

  dfs("");

  return numSet.size;
}
