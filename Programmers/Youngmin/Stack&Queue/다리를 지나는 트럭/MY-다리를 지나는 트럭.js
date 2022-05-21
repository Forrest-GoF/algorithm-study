function solution(bridge_length, weight, truck_weights) {
  const trucks = truck_weights.map((truckWeight) => ({ truckWeight: truckWeight, currentBridgeLength: 0 }));
  const trucksOnTheBridge = [];
  const passedTrucks = [];

  let result = 0;
  while (passedTrucks.length < truck_weights.length) {
    result = result + 1;

    if (trucksOnTheBridge.length !== 0 && trucksOnTheBridge[0].currentBridgeLength >= bridge_length) {
      passedTrucks.push(trucksOnTheBridge.shift());
    }

    const sumTrucksWeightsOnTheBridge = trucksOnTheBridge.reduce((acc, cur) => (acc += cur.truckWeight), 0);

    if (trucks.length > 0 && sumTrucksWeightsOnTheBridge + trucks[0].truckWeight <= weight) {
      trucksOnTheBridge.push(trucks.shift());
    }

    trucksOnTheBridge.forEach((truck) => {
      truck.currentBridgeLength = truck.currentBridgeLength + 1;
    });
  }

  return result;
}

// Test Case
// console.log(solution(2, 10, [7, 4, 5, 6])); // 8
// console.log(solution(100, 100, [10])); // 101
// console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110

/**
 * 문제: 다리를 지나는 트럭 - 프로그래머스
 * 테마: 스택 / 큐
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/42583
 *
 * [내 풀이]
 * + 다리를 지난 트럭 수 === 다리를 지나기 전 트럭 수일 때까지 반복
 *   - 시간을 +1 증감
 *   - 현재 시간 기준으로, 다리를 지나게 되는 다리 위에 트럭이 있다면(= 현재 다리 위에 가장 앞에 있는 트럭) 내보내기
 *   - 현재 다리 위에 트럭 무게 합을 구하기
 *   - 현재 다리 위에 트럭 무게 합 + 아직 다리를 오르지 못한 트럭 중 가장 앞 트럭의 무게 <= 다리가 견딜 수 있는 최대 무게인지 확인
 *     - 조건에 만족한다면, 다리 위에 트럭을 올리기
 *   - 다리 위에 트럭들 전진
 * + 실행시간: O(N^2) = bridge_length(최대 = 10,000) * truck_weights 배열 길이(최대 = 10,000)
 */
