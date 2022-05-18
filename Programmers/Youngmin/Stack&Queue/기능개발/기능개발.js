function solution(progresses, speeds) {
  let result = [0];
  let restDays = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[idx]));
  let currentMaxRestDay = restDays[0];

  for (let i = 0, j = 0; i < restDays.length; i++) {
    if (restDays[i] <= currentMaxRestDay) {
      result[j] = result[j] + 1;
    } else {
      currentMaxRestDay = restDays[i];

      j = j + 1;
      result[j] = 1;
    }
  }

  return result;
}

// Test Case
console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]

/**
 * [더 좋은 풀이]
 * - 각 작업이 완료되기 위한 잔여 작업일 = Math.ceil((100 - 현재 작업 진행률) / 현재 작업의 작업 속도) 배열을 구한다.
 * - 비교 대상인 현재 최대 잔여 작업일을 첫 번째 작업의 잔여일로 설정
 * - 배열을 순회하면서 다음 작업을 진행
 *   - 현재 최대 잔여 작업일 보다 작거나 같으면, 누적 완료 작업 수 증가
 *   - 현재 최대 잔여 작업일 보다 크면, 최대 잔여 작업일을 현재 순회 중인 작업의 잔여일로 업데이트 후, 누적 완료 작업 배열의 인덱스 증가
 */
