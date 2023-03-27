from ast import List


class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        if len(arr) <= 1:
            return [-1]
        max_number = -1

        for i in range(len(arr) - 1, -1, -1):
            temp = arr[i]
            arr[i] = max_number
            max_number = max(temp, max_number)

        return arr
