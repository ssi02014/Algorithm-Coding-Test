// 반복문
function solution1(chicken) {
  let rest = 0;
  let result = 0;

  while (chicken > 1) {
    rest += chicken % 10;
    result += Math.floor(chicken / 10);
    chicken = chicken / 10;
  }
  result += Math.floor(rest / 10);

  return result;
}

// recursive
function solution2(chicken) {
  let rest = 0;
  let result = 0;

  const recursive = (chicken) => {
    if (chicken < 1) return; // 종료 조건

    rest += chicken % 10;
    result += Math.floor(chicken / 10);
    chicken = chicken / 10;

    recursive(chicken); // 재귀 호출
  };

  recursive(chicken); // 최초 호출
  result += Math.floor(rest / 10);

  return result;
}
