class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        sum_nums = str(int(''.join(map(str, num))) + k)
        arr = []

        for sum_num in sum_nums:
            arr.append(int(sum_num))
        return arr
