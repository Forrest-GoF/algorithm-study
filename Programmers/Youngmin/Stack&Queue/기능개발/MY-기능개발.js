function solution(progresses, speeds) {
  const result = [];
  const maxProgress = 100;

  let currentIdx = 0;
  while (currentIdx < progresses.length) {
    if (progresses[currentIdx] < maxProgress) {
      for (let i = currentIdx; i < progresses.length; i++) {
        progresses[i] = progresses[i] + speeds[i];
      }
    }

    if (progresses[currentIdx] >= maxProgress) {
      result.push(0);
      while (progresses[currentIdx] >= maxProgress) {
        result[result.length - 1] = result[result.length - 1] + 1;
        currentIdx = currentIdx + 1;
      }
    }
  }

  return result;
}

// Test Case
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]

/**
 * 문제: 기능개발 - 프로그래머스
 * 테마: 스택 / 큐
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/42586
 *
 * [내 풀이]
 * - 현재 인덱스를 가리키는 인덱스 변수를 사용 ( 최대 progresses 길이 )
 * - progresses 배열의 첫 번째 작업을 보면서 100% 작업이 완료되는 시점 이전까지는 매 차례 배열 요소들을 각 speed 만큼 증가
 * - progresses 배열의 첫 번째 작업이 100% 가 되는 시점마다 뒷 작업이지만 100% 가 된 작업 수 만큼 해당 step 의 완료 작업 수 증가
 *   - step 이 끝나기 전에, 아직 작업이 끝나지 않은 작업의 인덱스로 설정
 * - 실행시간 O(N^2)
 *
 */
