function revBinSearch(array: number[], item: number): number {
  return search(array, item, 0, array.length);
}

function search(
  array: number[],
  item: number,
  leftIndex: number,
  rightIndex: number
): number {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor(leftIndex + rightIndex / 2);
  if (item === array[middleIndex]) {
    return middleIndex;
  }

  if (item < array[middleIndex]) {
    return search(array, item, leftIndex, rightIndex - 1);
  } else {
    return search(array, item, leftIndex + 1, rightIndex);
  }
}

console.log(revBinSearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(revBinSearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(revBinSearch([-5, 2, 4, 6, 10], 20)); // -1
