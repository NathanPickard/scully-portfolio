import { Component, OnInit, ViewChild } from '@angular/core';

import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav;

  constructor(private sideNavService: SideNavService) { }

  title = 'scully-portfolio';

  routes = [
    // { path: '/', name: 'Home' },
    { path: '/blog', name: 'Blog' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/about', name: 'About' }
  ];

  ngOnInit() {
    this.sidenav.open();

    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.sidenav.toggle();
    });
  }

}
