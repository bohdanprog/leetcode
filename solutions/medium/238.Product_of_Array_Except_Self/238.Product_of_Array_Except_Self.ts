function productExceptSelf(nums: number[]): number[] {
  const length = nums.length
  const answer = new Array().fill(length)
  const left = new Array().fill(length)
  const right = new Array().fill(length)
  left[0] = 1
  right[length - 1] = 1

  for(let i = 1; i < length; i++){
      left[i] = left[i - 1] * nums[i - 1]
  }

  for(let i = length - 2; i >= 0; i--){
      right[i] = right[i + 1] * nums[i + 1]
  }

  for(let i = 0; i < length; i++){
      answer[i] = left[i] * right[i] 
  }
  return answer
};