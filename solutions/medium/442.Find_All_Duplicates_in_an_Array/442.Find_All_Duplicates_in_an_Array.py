from ast import List


class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        answer = []

        for i in range(len(nums)):
            index = abs(nums[i]) - 1
            value = nums[index]
            if value < 0:
                answer.append(abs(value))
            else:
                nums[index] = -nums[index]

        return answer
