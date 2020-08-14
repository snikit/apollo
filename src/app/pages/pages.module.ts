import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DemoModule } from './demo/demo.module';
import { ThemeModule } from '../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    PagesRoutingModule,
    DemoModule,
    ThemeModule,
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
