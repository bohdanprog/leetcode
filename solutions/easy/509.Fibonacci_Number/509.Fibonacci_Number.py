class Solution:
    def fib(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1 or n == 2:
            return 1
        n1 = 1
        n2 = 2

        for i in range(3, n):
            n1, n2 = n2, n1 + n2

        return n2
