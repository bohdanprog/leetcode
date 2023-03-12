function findDuplicates(nums: number[]): number[] {
  const result:number[] = []
  for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1
      let value = nums[index]
      if(value < 0) {
          result.push(Math.abs(nums[i]))
      } else {
          nums[index] = -value
      }
  }

  return result
};