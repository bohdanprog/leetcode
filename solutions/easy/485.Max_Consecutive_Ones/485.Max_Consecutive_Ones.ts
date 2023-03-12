function findMaxConsecutiveOnes(nums: number[]): number {
  let maxNum = 0, tempNum = 0;
  for (let i = 0; i < nums.length; i++) {
      if(nums[i] === 1) {
        tempNum++
      }else {
        maxNum = Math.max(maxNum, tempNum);
        tempNum = 0
      }
  }
  return Math.max(maxNum, tempNum);
};