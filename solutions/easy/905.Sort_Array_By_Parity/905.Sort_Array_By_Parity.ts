function sortArrayByParity(nums: number[]): number[] {
  let k = 0
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] % 2 === 0) {
          let temp = nums[k]
          nums[k] = nums[i]
          nums[i] = temp
          k++
      }
  }
  return nums
};

function sortArrayByParitySecond(nums: number[]): number[] {
  let k = 0
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] % 2 === 0) {
          [nums[k], nums[i]] = [nums[i], nums[k]]
          k++
      }
  }
  return nums
};