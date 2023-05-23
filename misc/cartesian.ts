function cartesianProduct(a: number[], b: number[]): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      result.push([a[i], b[j]]);
    }
  }

  return result;
} // O(n^2)

const a: number[] = [1, 2];
const b: number[] = [3, 4];
console.log(cartesianProduct(a, b));
