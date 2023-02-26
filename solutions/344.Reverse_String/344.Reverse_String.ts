function SimpleReverseString(s: string[]): void {
  s.reverse()
};

function reverseString(s: string[]): void {
  let i = 0
  let j = s.length - 1

  while (i < j) {
      [s[i], s[j]] = [s[j], s[i]]
      i++
      j--
  }
};