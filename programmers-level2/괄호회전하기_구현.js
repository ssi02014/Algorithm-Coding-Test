function solution(s) {
  const bucketObj = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const buckets = s.split("");
  const bucketsLength = buckets.length;
  let result = 0;

  const isValidBuckets = (arr) => {
    const keys = Object.keys(bucketObj);
    const stack = [];

    if (keys.includes(arr[0])) return false;

    for (const bucket of arr) {
      const stackLastItem = stack.at(-1);
      const openedBucket = bucketObj[bucket];

      if (!stack.length || stackLastItem !== openedBucket) {
        stack.push(bucket);
        continue;
      }
      if (stackLastItem === openedBucket) {
        stack.pop();
      }
    }

    return stack.length ? false : true;
  };

  for (let i = 0; i < bucketsLength; i++) {
    buckets.push(buckets.shift());

    if (isValidBuckets(buckets)) {
      result++;
    }
  }

  return result;
}
