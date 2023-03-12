from ast import List
from math import floor


class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        evenAmountOfNums = 0
        for index in range(len(nums)):
            digits = 0
            n = nums[index]
            while n:
                digits += 1
                n = floor(n / 10)

            if digits % 2 == 0:
                evenAmountOfNums += 1
        return evenAmountOfNums
