import { Component, OnInit } from '@angular/core';
import { SORTING_ALGOS } from './sorting.utils';

@Component({
  selector: 'app-sorting',
  templateUrl: 'sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {

  SORTING_ALGOS = SORTING_ALGOS;

  constructor() {}
}
