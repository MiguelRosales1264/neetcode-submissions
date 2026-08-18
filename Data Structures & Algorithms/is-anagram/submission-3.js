class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) { return false; }
        const charMap = new Map()
        for (const char of s) {
            const currentCount = charMap.get(char) || 0;
            charMap.set(char, currentCount + 1);
        }
        for (const char of t) {
            if (!charMap.get(char)) { return false; }
            const currentCount = charMap.get(char);
            charMap.set(char, currentCount - 1);
        }
        return true;
    }
}
