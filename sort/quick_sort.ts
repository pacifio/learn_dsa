import { testArray } from "./bubble";

function quickSort(arr: number[]) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left: number[] = [];
  let right: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
} // BIGO -> O(n^2),THETA -> O(nlogn)

console.log(quickSort(testArray));
