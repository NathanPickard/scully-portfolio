import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('../portfolio-root/portfolio-root.module').then(m => m.PortfolioRootModule)
  },
  {
    path: ':title',
    component: PortfolioComponent,
  },
  {
    path: '**',
    component: PortfolioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule { }

