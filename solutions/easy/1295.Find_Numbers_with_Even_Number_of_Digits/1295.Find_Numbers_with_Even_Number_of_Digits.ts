function findNumbers(nums: number[]): number {
  let evenNumbers = 0;
  for(let i = 0; i < nums.length; i++) {
      let digits = 0;
      let n = nums[i];
      while (n > 0) {
          digits++;
          n = Math.floor(n / 10);          
      }
      if (digits % 2 === 0) evenNumbers++;
  }
  return evenNumbers;
};