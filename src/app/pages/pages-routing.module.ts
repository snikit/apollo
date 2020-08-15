import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'demo',
        component: DemoComponent,
      },
      {
        path: 'experiments',
        loadChildren: () =>
          import('./experiments/experiments.module').then(
            (m) => m.ExperimentsModule
          ),
      },
      {
        path: '',
        redirectTo: 'experiments',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: DemoComponent, //NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
