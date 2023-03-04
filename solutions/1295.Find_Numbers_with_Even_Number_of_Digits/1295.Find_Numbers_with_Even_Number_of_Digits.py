from ast import List
from math import floor


class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        evenAmontOfNums = 0
        for index in range(len(nums)):
            digists = 0
            n = nums[index]
            while n:
                digists += 1
                n = floor(n / 10)

            if digists % 2 == 0:
                evenAmontOfNums += 1
        return evenAmontOfNums
