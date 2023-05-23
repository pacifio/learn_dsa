function powof2(n: number): boolean {
  return n === 2 ** (n - 1);
}

console.log(powof2(1)); // true
console.log(powof2(2)); // true
console.log(powof2(5)); // false
