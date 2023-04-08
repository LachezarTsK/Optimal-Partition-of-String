
/**
 * @param {string} input
 * @return {number}
 */
var partitionString = function (input) {
    const ASCII_SMALL_CASE_A = 97;
    let minNumberOfSubstrings = 1;
    let substringBitmask = 0;

    for (let i = 0; i < input.length; ++i) {
        let charBitmask = 1 << (input.codePointAt(i) - ASCII_SMALL_CASE_A);
        if ((substringBitmask & charBitmask) !== 0) {
            ++minNumberOfSubstrings;
            substringBitmask = 0;
        }
        substringBitmask ^= charBitmask;
    }
    return minNumberOfSubstrings;
};
