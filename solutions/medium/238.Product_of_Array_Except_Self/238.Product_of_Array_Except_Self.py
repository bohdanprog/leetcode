from ast import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        answer, left, right = [0] * length, [0] * length, [0] * length
        left[0] = 1
        right[length - 1] = 1

        for index in range(1, len(nums)):
            left[index] = left[index - 1] * nums[index - 1]

        for i in range(length - 2, -1, -1):
            right[i] = right[i + 1] * nums[i + 1]

        for index, num in enumerate(nums):
            answer[index] = right[index] * left[index]

        return answer
