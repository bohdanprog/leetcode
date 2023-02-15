function addToArrayForm(num: number[], k: number): number[] {
    const sumNumber = (BigInt(num.join('')) + BigInt(k)).toString()
    let arr:number[] = []

    for(let i = 0; i < sumNumber.length; i++) {
        arr.push(Number(sumNumber[i]))
    }
    return arr
};