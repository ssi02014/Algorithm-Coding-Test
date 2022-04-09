var permute = function (nums) {
  const answer = [];
  const visited = new Array(nums.length).fill(0);
  const temp = [];

  recursive(0);

  return answer;

  function recursive(depth) {
    if (depth === nums.length) {
      answer.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) {
        continue;
      } else {
        temp.push(nums[i]);
        visited[i] = 1;

        recursive(depth + 1);

        temp.pop();
        visited[i] = 0;
      }
    }
  }
};
