import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bubbleSort } from '../sorting/sorting.utils';

@Component({
  selector: 'app-sorting-demo',
  templateUrl: './sorting-demo.component.html',
  styleUrls: ['./sorting-demo.component.css'],
})
export class SortingDemoComponent implements OnInit {
  activeAlgo = '';
  activeIndex = -1;
  comparaingIndex = -1;
  arrayToSort = [
    13,
    7,
    100,
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
    33,
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    this.activeAlgo = this.route.snapshot.paramMap.get('algo');
  }

  sort() {
    bubbleSort(this.arrayToSort, 100, (activeIndex: number , comparaingIndex : number) => {
      this.activeIndex = activeIndex;
      this.comparaingIndex = comparaingIndex;
    }).then(()=>{
      this.activeIndex = -1;
      this.comparaingIndex = -1;
    })

  }
}
