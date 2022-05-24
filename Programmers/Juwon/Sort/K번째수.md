[K번째수](https://programmers.co.kr/learn/courses/30/lessons/42748?language=java)

```java
import java.io.*;
import java.util.*;

class Solution {
    public Integer[] solution(int[] array, int[][] commands) {
        List<Integer> answer = new ArrayList<>();

        for(int[] command : commands){
            int i = command[0];
            int j = command[1];
            int k = command[2];

            List<Integer> targetList = new ArrayList<>();
            for(int ii = i - 1; ii < j; ++ii){
                targetList.add(array[ii]);
            }
            targetList.sort(Integer::compareTo);

            answer.add(targetList.get(k-1));
        }

        return answer.toArray(new Integer[0]);
    }
}
```

### 모범 답안  
- 시간복잡도  
    - O((N^2)logN)  
- 공간복잡도  
    - O(N)  

