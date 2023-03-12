function findKthPositive(arr: number[], k: number): number {
  let index = 0;
  
  while (index < arr.length) {
    if (arr[index] - index > k) {
      return index + k;
    }
    index++;
  }
  
  return arr.length + k;
}