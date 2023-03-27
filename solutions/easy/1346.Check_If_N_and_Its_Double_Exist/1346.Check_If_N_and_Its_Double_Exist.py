from ast import List


class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        arr_set = set(arr)
        for i in range(len(arr)):
            if arr[i] * 2 in arr_set and arr[i] != 0:
                return True
            elif arr[i] == 0 and arr.count(0) > 1:
                return True
        return False
