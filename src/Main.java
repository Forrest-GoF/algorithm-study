import java.io.*;
import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        HashSet<String> saveSet = new HashSet<>();

        Arrays.sort(phone_book, (s1, s2) ->  s1.length() - s2.length());

        for(String phone : phone_book){
            String partOfPhone = new String();

            for(int i = 0; i < phone.length(); i++){
                partOfPhone += phone.charAt(i);

                if(saveSet.contains(partOfPhone)){
                    answer = false;
                    return answer;
                }
            }

            saveSet.add(phone);
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

public class Main {
    public static void main(String[] args) throws IOException {

    }
}
