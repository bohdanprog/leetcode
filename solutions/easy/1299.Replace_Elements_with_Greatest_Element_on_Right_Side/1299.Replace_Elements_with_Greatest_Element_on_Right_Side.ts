function replaceElements(arr: number[]): number[] {
  if(arr.length <= 1) return [-1]
  let length = arr.length - 1
  let max = -1

  for(let i = length; i >= 0; i--) {
    let temp = arr[i]
    arr[i] = max
    max = Math.max(temp,max)
  }
  
  return arr
};