function findDisappearedNumbers(nums: number[]): number[] {
  let i = 0;
  const numsLength = nums.length
  while (i < numsLength) {
    let pos = nums[i] -1
    if(nums[i] !== nums[pos]) {
      [nums[i], nums[pos]] = [nums[pos], nums[i]]
    } else {
      i++
    }
  }
  const missNumber:number[] = []
  for(let i = 0; i < numsLength; i++) {
    if(nums[i] != i + 1){
      missNumber.push(i + 1)
    }
  }
  return missNumber
};

function findDisappearedNumbersSecond(nums: number[]): number[] {
  const hasMap = new Map();
  const numsLength = nums.length
  for(let i = 0; i < numsLength; i++) {
    hasMap.set(nums[i], true)
  }

  const missNumber:number[] = []
  for(let i = 1; i <= numsLength; i++) {
    if(!hasMap.has(i)) {
      missNumber.push(i)
    }
  }
  return missNumber
};