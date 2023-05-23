function slowSummation(n: number): number {
  let sum: number = 0;
  for (let i: number = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
} // O(n) = linear

function fastSummation(n: number): number {
  return (n * (n + 1)) / 2;
} // O(1) = constant

// two loops O(n^2)
// three loops O(n^3)

const person = {
  firstName: "Bruce",
  lastName: "Wayne",
}; // Add,remove and access is constant and everything else is linear

const odd = [1, 3, 5, 7, 9];
// insert / remove O(1)
// insert / remove at start -> O(n)
// access - O(1)
// search - O(n)
// forEach - O(n)
