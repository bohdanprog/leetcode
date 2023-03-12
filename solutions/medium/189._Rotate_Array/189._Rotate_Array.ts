/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  reverse(nums, nums.length - k, nums.length - 1);
  reverse(nums, 0, nums.length - k - 1);
  reverse(nums, 0, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// or this
function shortRotate(nums: number[], k: number): void {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k, k));
}