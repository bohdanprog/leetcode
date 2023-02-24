class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        current_min = prices[0]

        for i in range(1, len(prices)):
            price = prices[i]

            max_profit = max(max_profit, price - current_min)
            current_min = min(current_min, price)

        return max_profit
