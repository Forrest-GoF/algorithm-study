[H-Index](https://programmers.co.kr/learn/courses/30/lessons/42747?language=java#)

```java
import java.io.*;
import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int solution(int[] citations) {
        int hIndex = 0;
        int idxForCount = 0;
        List<Integer> sortedCitationList = Arrays.stream(citations)
            .boxed()
            .sorted(Integer::compareTo)
            .collect(Collectors.toList());

        int minCitation = sortedCitationList.get(0);
        int maxCitation = sortedCitationList.get(sortedCitationList.size() - 1);
        if(minCitation == maxCitation){
            return Math.min(minCitation, sortedCitationList.size());
        }

        while (hIndex < 1000){

            while (hIndex > sortedCitationList.get(idxForCount)){
                ++idxForCount;
            }

            if (hIndex > sortedCitationList.size() - idxForCount){
                return --hIndex;
            }

            ++hIndex;
        }

        return hIndex;
    }
}
```

### 모범 답안  
- 시간복잡도  
    - O(NlogN)  
- 공간복잡도  
    - O(N)  

