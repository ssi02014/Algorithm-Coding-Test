function solution(my_string) {
  const arr = my_string.split(" ");
  let result = Number(arr[0]);

  arr.forEach((el, i) => {
    const next = Number(arr[i + 1]);

    if (el === "+") result += next;
    else if (el === "-") result -= next;
  });

  return result;
}
