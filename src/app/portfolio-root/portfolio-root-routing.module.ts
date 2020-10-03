import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioRootComponent } from './portfolio-root.component';

const routes: Routes = [{ path: '', component: PortfolioRootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRootRoutingModule { }
