import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {

    }
}

class Solution {
    public String solution(String[] participants, String[] completion) {
        String answer = "";
        HashMap<String, Integer> participantCount = new HashMap<>();

        for(String participant : participants){
            int count = participantCount.getOrDefault(participant, 0);
            participantCount.put(participant, ++count);
        }

        for(String finisher : completion){
            int count = participantCount.get(finisher);
            participantCount.put(finisher, --count);
        }

        for(Map.Entry<String, Integer> entry : participantCount.entrySet()){
            if(entry.getValue() != 0) {
                answer = entry.getKey();
                break;
            }
        }

        return answer;
    }
}

/*
모범 답안
    시간복잡도
        O(N)
    공간복잡도
        O(N)
 */
