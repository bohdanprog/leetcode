function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];
  for(let i = 1; i<nums.length; i++){
      let num = nums[i]
      currentSum = Math.max(currentSum + num, num)
      maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum;
};

//or 

function maxSubArraySecond(nums: number[]): number {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];
  for(let i = 1; i<nums.length; i++){
      maxCurrent = Math.max(nums[i] , maxCurrent + nums[i])
      
      if(maxCurrent > maxGlobal){
          maxGlobal = maxCurrent;
      }
  }
  return maxGlobal;
};