function timer(ms): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

export async function bubbleSort(
  array: number[],
  pausingTime: number,
  callback: (activeIndex: number, comparaingIndex: number) => void
): Promise<void> {
  for (const i of array) {
    for (let j = 0; j < array.length - 1; j++) {
      callback(j, j + 1);
      await timer(pausingTime);
      if (array[j] > array[j + 1]) {
        const swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
  }
}

export async function insertionSort(
  listToSort: number[],
  pausingTime: number,
  callback: (activeIndex: number, comparaingIndex: number) => void
): Promise<void> {
  let i = 0;
  const len = listToSort.length;
  let holePosition = 0;
  let valueToInsert = 0;
  for (i = 0; i < len; i++) {
    valueToInsert = listToSort[i]; /* select value to be inserted */
    holePosition = i;

    /*locate hole position for the element to be inserted */
    while (holePosition > 0 && listToSort[holePosition - 1] > valueToInsert) {
      listToSort[holePosition] = listToSort[holePosition - 1];
      holePosition = holePosition - 1;
      callback(i, holePosition);
      await timer(pausingTime);
    }

    listToSort[
      holePosition
    ] = valueToInsert; /* insert the number at hole position */
  }
}

export enum SORTING_ALGOS {
  BUBBLE_SORT = 'Bubble Sort',
  INSERTION_SORT = 'Insertion Sort',
}
