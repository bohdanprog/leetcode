function minimumHealth(damage: number[], armor: number): number {
  let sum = 1;
  let maxDamage = 0;
  damage.filter(i=>{
      sum+=i
      if(i >= maxDamage) maxDamage = i
  });
  if(maxDamage > armor) return sum-armor
  return sum-maxDamage
};