import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperimentsComponent } from './experiments.component';
import { SortingComponent } from './sorting/sorting.component';
import { SortingDemoComponent } from './sorting-demo/sorting-demo.component';

const routes: Routes = [
  {
    path: '',
    component: ExperimentsComponent,
    children: [
      {
        path: 'sorting',
        component: SortingComponent,
      },
      {
        path: 'sorting-demo',
        component: SortingDemoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperimentsRoutingModule {}

export const routedComponents = [
  ExperimentsComponent,
  SortingComponent,
  SortingDemoComponent,
];
