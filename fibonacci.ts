// find the first n elements of fibonacci
// fibonacci(2) = [0,1]
// fibonacci(3) = [0, 1, 1]
// fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

function fibonacci(n: number): number[] {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
} // O(n+2)

console.log(fibonacci(7));
