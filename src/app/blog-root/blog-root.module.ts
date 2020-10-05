import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRootRoutingModule } from './blog-root-routing.module';
import { BlogRootComponent } from './blog-root.component';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [BlogRootComponent],
  imports: [
    CommonModule,
    BlogRootRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class BlogRootModule { }
