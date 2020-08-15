import { NgModule } from '@angular/core';
import {
  routedComponents,
  ExperimentsRoutingModule,
} from './experiments-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ExperimentsRoutingModule, CommonModule],
  exports: [],
  declarations: [...routedComponents],
})
export class ExperimentsModule {}
