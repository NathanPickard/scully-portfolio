import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

import { Observable } from 'rxjs';

import { ThemeService } from './shared/theme.service'
import { SideNavService } from './shared/side-nav.service';

import { routeTransitionAnimations } from './shared/route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav;

  isDarkTheme: Observable<boolean>;

  constructor(private sideNavService: SideNavService,
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer) { }

  title = 'scully-portfolio';
  isDark = false;

  routes = [
    { path: '/blog', name: 'Blog' },
    { path: '/portfolio', name: 'Portfolio' },
    { path: '/about', name: 'About' }
  ];

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    this.sidenav.open();

    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.sidenav.toggle();
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme')
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
  }

}
