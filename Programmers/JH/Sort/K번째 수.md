# [K번째 수](https://programmers.co.kr/learn/courses/30/lessons/42748)

```java
class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        for (int i=0; i<commands.length; i++) {
            int[] c = commands[i];
            int[] sortedArray = Arrays.copyOfRange(array,c[0]-1,c[1]);
            Arrays.sort(sortedArray);
            answer[i] = sortedArray[c[2]-1];
        }
        return answer;
    }
}
```