
public class Solution {

    public int partitionString(String input) {
        int minNumberOfSubstrings = 1;
        int substringBitmask = 0;

        for (int i = 0; i < input.length(); ++i) {
            int charBitmask = 1 << (input.charAt(i) - 'a');
            if ((substringBitmask & charBitmask) != 0) {
                ++minNumberOfSubstrings;
                substringBitmask = 0;
            }
            substringBitmask ^= charBitmask;
        }
        return minNumberOfSubstrings;
    }
}
