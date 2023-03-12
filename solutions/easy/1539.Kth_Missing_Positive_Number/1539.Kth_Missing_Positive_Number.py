from ast import List


class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
        index = 0

        while index < len(arr):
            if arr[index] - index > k:
                return index + k
            index += 1

        return len(arr) + k
