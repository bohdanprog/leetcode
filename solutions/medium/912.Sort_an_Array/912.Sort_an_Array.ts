function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  const left:number[] = nums.slice(0, mid);
  const right:number[] = nums.slice(mid);

  const sortedLeft = sortArray(left);
  const sortedRight = sortArray(right);

  return merge(sortedLeft, sortedRight);
};

function merge(left:number[], right:number[]) {
  const result:number[] = [];

  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}