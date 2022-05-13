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