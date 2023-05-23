function factorial(n: number): number {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
} // O(n)

console.log(factorial(1));
console.log(factorial(5));
