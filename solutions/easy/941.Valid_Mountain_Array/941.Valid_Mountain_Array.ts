// Here's how the algorithm works:
// First, it checks if the array has at least 3 elements. If not, it returns false, since a mountain array must have at least 3 elements.
// Next, it sets the variable i to 0 and iterates through the array until it finds a peak element. A peak element is an element in the array that is greater than all its adjacent elements.
// If i is 0 or i is the last index of the array, it means there is no peak element and the array is not a mountain array, so it returns false.
// Then, it iterates through the array again from the peak element until the end of the array, checking if all the elements in this range are decreasing. If any element is not decreasing, it returns false.
// If the loop completes without returning false, it means the array is a mountain array, so it returns true.
// Overall, the algorithm has a time complexity of O(n), where n is the length of the input array, since it performs two linear scans of the array. The space complexity is O(1), since it only uses a constant amount of extra space.

function validMountainArray(arr: number[]): boolean {
  const length = arr.length
  let i = 0

  while(i + 1 < length && arr[i] < arr[i + 1]){
    i++
  }
  if(i === 0 || i === length - 1) return false

  while(i + 1 < length && arr[i] > arr[i +1]){
    i++
  }
  return i == length - 1
};