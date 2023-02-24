from ast import List
from math import floor


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        while left <= right:
            midle = floor((left + right) / 2)
            if nums[midle] == target:
                return midle
            elif nums[midle] < target:
                left = midle + 1
            else:
                right = midle - 1
        return left
