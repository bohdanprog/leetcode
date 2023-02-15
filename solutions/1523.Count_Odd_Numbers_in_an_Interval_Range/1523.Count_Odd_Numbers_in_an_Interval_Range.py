class Solution:
    def countOdds(self, low: int, high: int) -> int:
        count = math.floor((high - low + 1) / 2)
        if low % 2 != 0 and high % 2 != 0:
            return count + 1
        return count
