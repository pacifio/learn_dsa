import { testArray } from "./bubble";

function mergeSort(arr: number[]) {
  if (arr.length < 2) {
    return arr;
  }

  const mid: number = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
} // O(nlogn)

function merge(leftArr: number[], rightArr: number[]) {
  const sortedArr: (number | undefined)[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

mergeSort(testArray);
console.log(testArray);
