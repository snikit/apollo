import { Component } from '@angular/core';

@Component({
  selector: 'app-experiments',
  template: `
  <a routerLink='./sorting' >
  sortings
</a>
  <router-outlet></router-outlet>`,
})
export class ExperimentsComponent {}
