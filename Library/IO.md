### IOException
```java
public static void Main(String[] args) throws IOException {...}
```

### Scanner
```java
Scanner sc = new Scanner(System.in);

int n = sc.nextInt();
long l = sc.nextLone();
String s = sc.next();
String s = sc.nextLine();
```

### BufferedReader
```java
import java.io.*;
public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
}
```

### ex)
```text
in:
3
0 3
1 5
45 50
```
```java
Scanner sc = new Scanner(System.in);
int T = sc.nextInt();
for(int i = 0; i < T; i++){
    int X=sc.nextInt();
    int Y=sc.nextInt();
}
```
```java
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
