function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function bubbleSort(
  array: number[],
  pausingTime: number,
  callback: (activeIndex: number , comparaingIndex : number) => void
) {
  for (const i of array) {
    for (let j = 0; j < array.length - 1; j++) {
      callback(j ,j + 1);

      if (array[j] > array[j + 1]) {
        const swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
      await timer(pausingTime);
    }
  }
}

export enum SORTING_ALGOS {
  BUBBLE_SORT,
  A,
  B,
  C,
}
