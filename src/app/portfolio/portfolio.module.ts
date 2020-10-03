import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {PortfolioComponent} from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, PortfolioRoutingModule, ScullyLibModule],
})
export class PortfolioModule {}
