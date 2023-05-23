const findIndex: (array: number[], n: number) => number = (
  array: number[],
  n: number
) => {
  let index: number = -1;
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === n) {
      index = i;
    }
  }

  return index;
};

console.log(findIndex([-5, 2, 10, 4, 6], 10));
