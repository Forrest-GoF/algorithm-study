# Algorithm-Study

```
💡 프로그래머스 코딩테스트 `고득점 Kit`을 매일 한 문제씩 푼다.
```

### ☝️Rules

- 본 스터디의 목적은 코딩테스트 대비가 아니다.
- 본 과정 전까지 `Java` 언어에 익숙해지고 서로의 **코드 스타일**을 맞춰가는데 목적을 둔다.
- 따라서 모든 문제는 Java를 사용하여 풀이해야 하고, 매번 `Pull Requests`를 통해 서로의 코드를 리뷰한다.

### 🔗 Reference

[코딩테스트 연습 | 프로그래머스](https://programmers.co.kr/learn/challenges?tab=algorithm_practice_kit)

---

## Basic guide
### I/O
#### Scanner
```java
Scanner sc = new Scanner(System.in);

int n = sc.nextInt();
long l = sc.nextLone();
String s = sc.next();
String s = sc.nextLine();
```

#### BufferedReader
```java
import java.io.*;
public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
}
```

#### ex)
```java
in:
3
0 3
1 5
45 50

Scanner sc = new Scanner(System.in);
int T = sc.nextInt();
for(int i = 0; i < T; i++){
    int X=sc.nextInt();
    int Y=sc.nextInt();
}

BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int T = Integer.parseInt(br.readLine());
long[] startPoint = new long[T];
long[] endPoint = new long[T];
for(int i = 0 ; i<T ; i++ ){
    StringTokenizer st=new StringTokenizer(br.readLine()," ");
    startPoint[i]=Integer.parseInt(st.nextToken());
    endPoint[i]=Integer.parseInt(st.nextToken());
}
```

### Linked List
```java
import java.util.LinkedList;
LinkedList<Integer> arr = new LinkedList<Integer>();
```
#### Methods
##### 삽입
- `add([value])`
- `add(index, [value])`

##### 변경
- `set(index, [value])`

##### 제거
- `remove([value])`
- `remove(index)`

##### 값 존재 확인
- `boolean contains = arr.contains([value]);`
- `int index = arr.indexOf([value])`


### Heap
```java
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(\
        (Integer o1, Integer o2) -> (-Ingeger.compare(o1,o2)));
```
- add
- poll
- peek
- remove