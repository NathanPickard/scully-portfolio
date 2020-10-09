import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})

export class MaterialModule { }
