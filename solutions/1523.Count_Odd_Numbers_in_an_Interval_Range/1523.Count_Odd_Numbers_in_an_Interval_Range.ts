function countOdds(low: number, high: number): number {
    const count = Math.floor((high - low + 1) / 2);
    return low % 2 !== 0 && high % 2 !== 0 ? count + 1 : count;
};