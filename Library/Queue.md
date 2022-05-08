### Method 차이
- **삽입**
  - `offer`: 정상적으로 삽입되면 true 리턴, 용량을 초과하면 false 리턴.
  - `add`: 용량을 초과하면 예외 발생.
- **추출**
  - `poll`: 비어있으면 null 리턴.
  - `remove`: 비어있으면 예외 발생.
- **확인**
  - `peek`: 제거 안하고 값만 리턴, 비어있으면 null 리턴.
  - `get`: 제거 안하고 값만 리턴, 비어있으면 예외 발생.

### Queue
```java
Queue<Integer> queue = new LinkedList<>();

// 추가
queue.offer(1);

// 삭제
queue.poll();

// 초기화
queue.clear();
```

### Stack & Deque
- Stack
  - `push`
  - `pop`
- Deque
  - `add`
  - `remove`
```java
Deque<Integer> stack = new ArrayDeque<>();
Deque<Integer> deque = new ArrayDeque<>();

// 추가
deque.addFirst(1);      // push()와 동일
deque.addLast(10);      // add()와 동일

// 제거
deque.removeFirst();    // pop()과 동일
deque.removeLast();     // remove()와 동일

// 확인
deque.peekFirst();      // peek()와 동일
```


###  Priority Queue
```java
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
PriorityQueue<Integer> maxHeap = new PriorityQueue<>
        ((Integer o1, Integer o2) -> (-Ingeger.compare(o1,o2)));

q.add(1);
q.peek();
```