/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let k = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      [nums[k], nums[i]] = [nums[i], nums[k]]
      k++ 
    }
  }
};

function moveZeroesSecond(nums: number[]): void {
  let k = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      let temp = nums[k]
      nums[k] = nums[i]
      nums[i] = temp
      k++ 
    }
  }
};