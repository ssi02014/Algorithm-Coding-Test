function solution(users, emoticons) {
  let count = 0;
  let money = 0;
  let allCase = [];
  let discountList = [10, 20, 30, 40];

  const getDiscountPrice = (discount, price) => {
    return ((100 - discount) / 100) * price;
  };

  // 모든 경우의 수 탐색
  /* ex)
    1. DFS([7000, 9000], []);
    2. DFS([9000], [10, 7000])
      2-1. DFS([], [[10, 7000], [10, 9000]])
          -> allCase= [[10, 7000], [10, 9000]]
      2-2. DFS([], [[10, 7000], [20, 9000]])
          allCase= [[[10, 7000], [10, 9000]], [[10, 7000], [20, 9000]]]
      // ...
    3. DFS([9000], [20, 7000])
      3-1 DFS([], [[20, 7000], [10, 9000]])
      3-2 DFS([], [[20, 7000], [20, 9000]])
      // ...
    4. ...
  */
  const dfs = (emotions, searchCase) => {
    if (emotions.length < 1) {
      allCase.push(searchCase);
      return;
    }

    for (let i = 0; i < discountList.length; i++) {
      dfs(emotions.slice(1), [...searchCase, [discountList[i], emotions[0]]]);
    }
  };

  dfs(emoticons, []);

  allCase.forEach((individualCase) => {
    let tempCount = 0; // 플러스 서비스 가입 체크 변수
    let tempPrice = 0; // 사용자들의 누적 가격

    users.forEach((userInfo) => {
      const [userDiscount, userPrice] = userInfo;
      let price = 0;

      // ex) individualCase: [[ 10, 7000 ], [ 10, 9000 ]]
      individualCase.forEach((caseInfo) => {
        const [caseDiscount, casePrice] = caseInfo;

        // user의 기준 할인율보다 높은 할인율을 가지면 price에 가격을 누적한다.
        if (userDiscount <= caseDiscount) {
          price += getDiscountPrice(caseDiscount, casePrice);
        }
      });

      // price가 현재 user의 플러스 서비스 가입 기준 금액보다 이상이면 tempCount를 증가시킨다.
      if (price >= userPrice) {
        tempCount++;
      } else {
        // price가 현재 user의 플러스 서비스 가입 기준 금액보다 미만이면 tempPrice에 price를 누적한다.
        tempPrice += price;
      }
    });

    if (count < tempCount) {
      count = tempCount;
      money = tempPrice;
    } else if (count === tempCount) {
      money = Math.max(money, tempPrice);
    }
  });

  return [count, money];
}
