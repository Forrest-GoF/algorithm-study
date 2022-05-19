function solution(priorities, location) {
  const prioritiesObjs = priorities.map((priority, location) => ({ location, priority }));

  let result = 0;
  while (prioritiesObjs) {
    const popPriority = prioritiesObjs.shift();

    if (prioritiesObjs.some((priority) => popPriority.priority < priority.priority)) {
      prioritiesObjs.push(popPriority);
    }

    if (prioritiesObjs.every((priority) => popPriority.priority >= priority.priority)) {
      result = result + 1;
      if (popPriority.location === location) break;
    }
  }

  return result;
}

// Test Case
// console.log(solution([2, 1, 3, 2], 2)); // 1
// console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
// console.log(solution([1], 0)); // 1

/**
 * 문제: 프린터 - 프로그래머스
 * 테마: 스택 / 큐
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/42587
 */
