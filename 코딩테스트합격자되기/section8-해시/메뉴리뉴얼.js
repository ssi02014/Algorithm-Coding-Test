/**
 * 프로그래머스 레벨2 메뉴 리뉴얼
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/72411
 */
function solution(orders, course) {
  const result = [];
  const orderedCourseCountObj = {};
  const maxCountObj = {};

  // 코스요리 메뉴의 모든 조합을 카운팅, 이때 course 배열에 해당되는 길이의 메뉴 조합만 해당
  const setOrderedCourseCombinations = (curStr, idx, orderList) => {
    if (course.includes(curStr.length)) {
      orderedCourseCountObj[curStr] = (orderedCourseCountObj[curStr] || 0) + 1;

      const count = orderedCourseCountObj[curStr];
      const max = maxCountObj[curStr.length] || 1;

      // 기존 course 길이에 매칭되는 주문 횟수 보다 더 많이 주문되면 최대 주문 횟수 갱신
      if (max < count) {
        maxCountObj[curStr.length] = count;
      }
    }

    // 재귀를 통한 모든 조합을 알아낸다.
    for (let i = idx; i < orderList.length; i++) {
      setOrderedCourseCombinations(curStr + orderList[i], i + 1, orderList);
    }
  };

  for (let i = 0; i < orders.length; i++) {
    const orderList = orders[i].split("").sort();

    setOrderedCourseCombinations("", 0, orderList);
  }

  // 주문된 모든 조합을 순회하면서 course 길이에 매칭되는 최대 주문 횟수와 동일한 메뉴 구성을 알아낸다.
  for (const course in orderedCourseCountObj) {
    if (maxCountObj[course.length] === orderedCourseCountObj[course]) {
      result.push(course);
    }
  }

  return result.sort();
}
