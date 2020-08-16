function timer(ms): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

export async function bubbleSort(
  listToSort: number[],
  pausingTime: number,
  callback: (activeIndex: number, comparaingIndex: number) => void
): Promise<void> {
  let i = 0;
  let j = 0;
  const len = listToSort.length;
  let currentValue = 0;
  let nextValue = 0;
  let swapped = false;

  for (i = 0; i < len; i++) {
    swapped = false;
    for (j = 0; j < len - 1; j++) {
      currentValue = listToSort[j];
      nextValue = listToSort[j + 1];

      if (currentValue > nextValue) {
        callback(j, j + 1);
        await timer(pausingTime);

        /* compare the adjacent elements */
        listToSort[j] = nextValue; /* swap them */
        listToSort[j + 1] = currentValue;
        swapped = true;
      }
    }
    if (!swapped) {
      /*if no number was swapped that means array is sorted now, break the loop.*/
      break;
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
