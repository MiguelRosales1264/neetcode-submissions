class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        const len = nums.length;
        for (let i = 0; i < len; i++) {
            const needed = target - nums[i];
            if (map.has(needed)) {
                return [map.get(needed), i];
            }
            map.set(nums[i], i);
        }
    }
}
