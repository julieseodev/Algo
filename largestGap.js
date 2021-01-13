// Given a list of integers nums, return the largest difference of two consecutive integers in the sorted version of nums.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
nums = [4, 1, 2, 8, 9, 10]
// Output
// 4

class Solution {
    solve(nums) {
        nums.sort();
        let gap = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            let diff = Math.abs(nums[i] - nums[i + 1]);
            gap = Math.max(diff, gap);
        }
        return gap;
    }
}