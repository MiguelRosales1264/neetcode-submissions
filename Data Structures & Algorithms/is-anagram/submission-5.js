class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) { return false; }

        const counts = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            counts[s.charCodeAt(i) - aCode]++;
            counts[t.charCodeAt(i) - aCode]--;
        }

        return counts.every(c => c === 0);
    }
}
