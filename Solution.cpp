
#include <string>
using namespace std;

class Solution {
    
public:
    int partitionString(const string& input)const {
        int minNumberOfSubstrings = 1;
        int substringBitmask = 0;

        for (const auto& letter : input) {
            int charBitmask = 1 << (letter - 'a');
            if ((substringBitmask & charBitmask) != 0) {
                ++minNumberOfSubstrings;
                substringBitmask = 0;
            }
            substringBitmask ^= charBitmask;
        }
        return minNumberOfSubstrings;
    }
};
