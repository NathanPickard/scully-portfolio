import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {RouterOutlet } from '@angular/router';

import { SideNavService } from '../../side-nav.service';

import { routeTransitionAnimations } from '../../route-transition-animations'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [routeTransitionAnimations]
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav;
  @Input() isDark;

  // themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  themeColor: 'accent';
  // isDark = false;

  constructor(private sideNavService: SideNavService) { }
  
  title = 'scully-portfolio';

  routes = [
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

}
