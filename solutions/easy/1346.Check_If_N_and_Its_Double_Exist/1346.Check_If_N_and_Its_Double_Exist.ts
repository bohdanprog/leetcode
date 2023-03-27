function checkIfExist(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] * 2 === arr[i + 1] || arr[i] === arr[i + 1] * 2) {
      return true;
    }
  }
  return false;
};

//or this solution

function checkIfExistSecond(arr: number[]): boolean {
  const set = new Set();
  for (const num of arr) {
    if (set.has(num * 2) || set.has(num / 2)) {
      return true;
    }
    set.add(num);
  }
  return false;
};