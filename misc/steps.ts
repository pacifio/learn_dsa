function climb(n: number) {
  const ways = [1, 2];
  for (let i = 2; i < n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[n - 1];
} // O(n)

console.log(climb(1));
console.log(climb(2));
console.log(climb(3));
console.log(climb(4));
console.log(climb(5));
