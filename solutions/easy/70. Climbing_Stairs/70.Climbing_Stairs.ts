function climbStairs(n: number): number {
    if (n === 1) return 1;

    let n1 = 1
    let n2 = 2

    for(let i = 3; i < n + 1; i++) {
        // let temp = n2;   or this
        // n1 = n2;
        // n2 = temp + n2;
        [n1, n2] = [n2, n1 + n2]
    }
    return n2
};
