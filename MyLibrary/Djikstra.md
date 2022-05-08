```java
import java.util.*;

class Node implements Comparable<Node>{
    int destination;
    int weight;

    public Node(int destination, int weight) {
        this.destination = destination;
        this.weight = weight;
    }

    @Override
    public int compareTo(Node node) {
        return Integer.compare(this.weight, node.weight);
    }
}

class Graph {
    private int length;
    private ArrayList<Node>[] map;
    
    public Graph(int n) {
        length = n;
        for (int i=0; i < length+1; i++)
            map[i] = new ArrayList<>();
    }

    public void input(int origin, int destination, int weight) {
        map[origin].add(new Node(destintion, weight));
    }
    
    public int[] dijkstra(int origin) {
        private int[] distance = new int[length+1];
        Arrays.fill(distance, Integer.MAX_VALUE);
        distance[origin] = 0;
        
        PriorityQueue<Node> heap = new PriorityQueue<>();
        heap.add(new Node(origin, 0));
        while (!heap.isEmpty()) {
            Node current = heap.poll();
            if (current.weight != distance[current.destination])
                continue;
            for (Node next : map[current.destination]) {
                if (distance[next.destination] > distance[current.destination] + next.weight) {
                    distance[next.destination] = distance[current.destination] + next.weight;
                    heap.add(new Node(next.destination, distance[next.destination]));
                }
            }
        }
        return distance;
    }
}
```