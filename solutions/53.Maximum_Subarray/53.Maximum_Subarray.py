from ast import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum = nums[0]
        current_sum = nums[0]

        for i in range(1, len(nums)):
            num = nums[i]
            current_sum = max(current_sum + num, num)
            max_sum = max(current_sum, max_sum)

        return max_sum
