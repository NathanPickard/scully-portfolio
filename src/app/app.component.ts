import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scully-portfolio';

  routes = [
    { path: '/', name: 'Home' },
    { path: '/blog', name: 'Blog' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/about', name: 'About' }
  ];
}
