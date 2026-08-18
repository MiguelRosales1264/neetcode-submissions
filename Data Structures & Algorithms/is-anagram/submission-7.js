class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const len = s.length;
        if (len != t.length) { return false; }

        const counts = new Int16Array(26);
        const aCode = 97;

        for (let i = 0; i < len; i++) {
            counts[s.charCodeAt(i) - aCode]++;
            counts[t.charCodeAt(i) - aCode]--;
        }

        for (let i = 0; i < 26; i++) {
            if (counts[i] !== 0) { return false; }
        }
        return true;
    }
}
