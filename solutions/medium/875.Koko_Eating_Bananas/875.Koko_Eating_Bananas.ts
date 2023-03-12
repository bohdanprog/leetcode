function minEatingSpeed(piles: number[], h: number): number {
  let left = 1, right = 1;
  for (const pile of piles) {
      right = Math.max(right, pile);
  }

  while (left < right) {
      let middle = Math.floor((left + right) / 2);
      let hourSpent = 0;

      for (const pile of piles) {
          hourSpent += Math.ceil(pile / middle);
      }

      if (hourSpent <= h) {
          right = middle;
      } else {
          left = middle + 1;
      }
  }

  return left;
};