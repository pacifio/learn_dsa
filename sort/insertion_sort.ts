import { testArray } from "./bubble";

function insertionSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    let nti = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = nti;
  }
} // O(n^2)

insertionSort(testArray);
console.log(testArray);
