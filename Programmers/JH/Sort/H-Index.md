# [H-Index](https://programmers.co.kr/learn/courses/30/lessons/42747)
```java
class Solution {
    public int solution(int[] citations) {
        int maxH = citations.length;
        while (true) {
            int hIndex = maxH--;
            int validPaperNum = (int) Arrays.stream(citations)
                    .filter(n -> n>=hIndex)
                    .count();
            if (validPaperNum >= hIndex)
                return hIndex;
        }
    }
}
```