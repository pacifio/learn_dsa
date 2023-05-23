const revFibonacci: (n: number) => number = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return revFibonacci(n - 1) + revFibonacci(n - 2);
};

console.log(revFibonacci(0));
console.log(revFibonacci(1));
console.log(revFibonacci(6));
