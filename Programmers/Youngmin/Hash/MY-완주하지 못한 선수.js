function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
}

// Test Case
// console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
// console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // "vinko"
// console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"

/**
 * 문제 : 프로그래머스 - 완주하지 못한 선수
 * 테마 : 해시
 * 출처 : https://programmers.co.kr/learn/courses/30/lessons/42576
 */
