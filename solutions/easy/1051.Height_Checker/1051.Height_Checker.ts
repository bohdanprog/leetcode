function heightChecker(heights: number[]): number {
  let index = 0;
  const expected = heights.map((el) => el).sort((a, b) => a - b)
  for(let i = 0; i < heights.length; i++) {
    if(heights[i] !== expected[i]) {
      index++
    }
  } 

  return index
};