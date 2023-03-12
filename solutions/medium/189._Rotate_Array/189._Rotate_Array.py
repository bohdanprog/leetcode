from ast import List


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        len_nums = len(nums)
        k = k % len_nums
        custom_reverse(nums, len_nums - k, len_nums - 1)
        custom_reverse(nums, 0, len_nums - k - 1)
        custom_reverse(nums, 0, len_nums - 1)


def custom_reverse(nums: List[int], start: int, end: int) -> None:
    while start < end:
        nums[start], nums[end] = nums[end], nums[start]
        start += 1
        end -= 1
