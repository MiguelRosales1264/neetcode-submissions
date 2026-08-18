class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) { return false; }
        const charCounts = {};
        for (const char of s) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }
        for (const char of t) {
            if (!charCounts[char]) { return false; }
            charCounts[char]--;

        }
        return true;
    }
}
