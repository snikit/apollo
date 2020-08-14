import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  //styleUrls: ['pages.component.scss'],
  // template: `<app-sidebar></app-sidebar>  <router-outlet></router-outlet>`,
  // template: `<app-sidebar></app-sidebar> `,
})
export class PagesComponent {
  menu = ['menu1', 'menu2'];
}
