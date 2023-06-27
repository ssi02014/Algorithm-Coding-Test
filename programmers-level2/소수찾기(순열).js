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
function solution(numbers) {
  const visited = Array.from({ length: numbers.length }, () => false);
  const numSet = new Set();
  let result = 0;

  const dfs = (target) => {
    const isHasNum = numSet.has(+target);

    if (!isHasNum) {
      numSet.add(+target);

      if (isPrimeNumber(+target)) {
        result++;
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

  return result;
}
