from ast import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = 0
        for j, _ in enumerate(nums):
            if nums[j] != val:
                nums[i] = nums[j]
                i += 1
        return i
