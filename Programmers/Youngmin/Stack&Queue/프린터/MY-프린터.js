function solution(priorities, location) {
  const prioritiesObjs = priorities.map((priority, location) => ({ location, priority }));

  let result = 0;
  while (prioritiesObjs) {
    if (prioritiesObjs.slice(1).some((priority) => prioritiesObjs[0].priority < priority.priority)) {
      prioritiesObjs.push(prioritiesObjs.shift());
    } else {
      const popPriority = prioritiesObjs.shift();
      result = result + 1;

      if (popPriority.location === location) break;
    }
  }

  return result;
}

// Test Case
console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
console.log(solution([1], 0)); // 1

/**
 * 문제: 프린터 - 프로그래머스
 * 테마: 스택 / 큐
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/42587
 */
