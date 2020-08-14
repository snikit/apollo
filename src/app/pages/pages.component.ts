import { Component } from '@angular/core';
import {
  faGhost,
  faAtlas,
  faBolt,
  faBookmark,
  faBug,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  // styleUrls: ['pages.component.scss'],
  // template: `<app-sidebar></app-sidebar>  <router-outlet></router-outlet>`,
  // template: `<app-sidebar></app-sidebar> `,
})
export class PagesComponent {
  menu = ['menu1', 'menu2'];
  faGhost = faGhost;
  faAtlas = faAtlas;
  faBolt = faBolt;
  faBug = faBug;
  faBookmark = faBookmark;
  faCommentDots = faCommentDots;
}

// $("#menu-toggle").click(function(e) {
//   e.preventDefault();
//   $("#wrapper").toggleClass("toggled");
// });
