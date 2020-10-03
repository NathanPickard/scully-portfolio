import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRootRoutingModule } from './portfolio-root-routing.module';
import { PortfolioRootComponent } from './portfolio-root.component';


@NgModule({
  declarations: [PortfolioRootComponent],
  imports: [
    CommonModule,
    PortfolioRootRoutingModule
  ]
})
export class PortfolioRootModule { }
