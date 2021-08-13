import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRootRoutingModule } from './portfolio-root-routing.module';
import { PortfolioRootComponent } from './portfolio-root.component';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PortfolioRootComponent],
  imports: [
    CommonModule,
    PortfolioRootRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PortfolioRootModule { }
