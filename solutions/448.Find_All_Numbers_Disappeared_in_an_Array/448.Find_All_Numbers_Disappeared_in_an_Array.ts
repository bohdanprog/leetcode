function findDisappearedNumbers(nums: number[]): number[] {
  const sortedArr = nums.sort()
  let result:number[] = []
  for(let i = 1; i < nums.length; i++) {
      if(sortedArr[i] !== i) result.push(i)
  }
  return result
};