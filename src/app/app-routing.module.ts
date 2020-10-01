import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
