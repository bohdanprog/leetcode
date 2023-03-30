from ast import List


class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        elem_counted = 1
        prev_element = nums[0]

        for index in range(1, len(nums)):
            if nums[index] != prev_element:
                elem_counted += 1
                prev_element = nums[index]
            if elem_counted == 3:
                return nums[index]

        return nums[0]
