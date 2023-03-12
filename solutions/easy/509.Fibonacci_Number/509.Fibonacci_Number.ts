function fib(n: number): number {
    if(n === 0) return 0
    if(n === 1 || n === 2) return 1

    let n1 = 1
    let n2 = 2
    for(let i = 3; i < n; i++) {
        [n1, n2] = [n2, n1 + n2]
    }
    return n2
};