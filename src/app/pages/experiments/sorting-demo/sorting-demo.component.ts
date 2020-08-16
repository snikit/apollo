import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  bubbleSort,
  insertionSort,
  SORTING_ALGOS,
} from '../sorting/sorting.utils';

@Component({
  selector: 'app-sorting-demo',
  templateUrl: './sorting-demo.component.html',
  styleUrls: ['./sorting-demo.component.css'],
})
export class SortingDemoComponent implements OnInit {
  activeAlgo = '';
  activeIndex = -1;
  comparaingIndex = -1;
  SORTING_ALGOS = SORTING_ALGOS;
  arrayToSort = [
    13,
    7,
    66,
    6,
    45,
    21,
    9,
    31,
    88,
    17,
    55,
    80,
    65,
    60,
    23,
    78,
    18,
    5,
    95,
    65,
    34,
    77,
    13,
    10,
    29,
    24,
    60,
    11,
    5,
    88,
    73,
    32,
    19,
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    this.activeAlgo = this.route.snapshot.paramMap.get('algo');
  }

  sort(): void {
    let callingAlgo: any;

    switch (this.activeAlgo) {
      case SORTING_ALGOS.BUBBLE_SORT:
        callingAlgo = bubbleSort;
        break;

      case SORTING_ALGOS.INSERTION_SORT:
        callingAlgo = insertionSort;

        break;
    }

    callingAlgo(
      this.arrayToSort,
      20,
      (activeIndex: number, comparaingIndex: number) => {
        this.activeIndex = activeIndex;
        this.comparaingIndex = comparaingIndex;
      }
    ).then(() => {
      this.activeIndex = -1;
      this.comparaingIndex = -1;
    });
  }
}
