from ast import List


class NumArray:
    sum = []

    def __init__(self, nums: List[int]):
        current_sum = 0
        for num in nums:
            current_sum += num
            self.sum.append(current_sum)

    def sumRange(self, left: int, right: int) -> int:
        if left == 0:
            return self.sum[right]
        return self.sum[right] - self.sum[left - 1]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
