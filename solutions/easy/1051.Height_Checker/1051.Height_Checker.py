class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        index = 0
        expected = sorted(heights)
        for i in range(len(heights)):
            if heights[i] != expected[i]:
                index += 1
        return index
