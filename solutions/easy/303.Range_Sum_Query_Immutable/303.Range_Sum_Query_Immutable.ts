class NumArray {
  sum:number[] = []
  constructor(nums: number[]) {
      let currentSum = 0
      for(let i = 0; i < nums.length; i++){
          currentSum += nums[i]
          this.sum.push(currentSum)
      }
  }

  sumRange(left: number, right: number): number {
      if(left === 0) {
          return this.sum[right]
      }
      return this.sum[right] - this.sum[left - 1]
  }
}
