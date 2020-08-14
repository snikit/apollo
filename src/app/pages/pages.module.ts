import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DemoModule } from './demo/demo.module';
import { ThemeModule } from '../@theme/theme.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [PagesRoutingModule, DemoModule, ThemeModule, CommonModule],
  declarations: [PagesComponent],
})
export class PagesModule {}
