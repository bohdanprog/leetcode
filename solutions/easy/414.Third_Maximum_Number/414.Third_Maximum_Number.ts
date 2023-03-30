function thirdMax(nums: number[]): number {
  // Sort the array in non-increasing order.
    nums.sort((a, b) => b - a);

    let elemCounted = 1;
    let prevElem = nums[0];

    for (let index = 1; index < nums.length; ++index) {
        // Current element is different from previous.
        if (nums[index] != prevElem) {
            elemCounted += 1;
            prevElem = nums[index];
        }

        // If we have counted 3 numbers then return current number.
        if (elemCounted == 3) {
            return nums[index];
        }
    }

    // We never counted 3 distinct numbers, return largest number.
    return nums[0];
};