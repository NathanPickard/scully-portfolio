import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideNavService } from './side-nav.service';
import { GithubService } from './github.service';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav;

  foundProjects: any[];

  constructor(private sideNavService: SideNavService,
    private githubService: GithubService) { }

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

    this.getProjects();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

  getProjects() {
    return this.githubService.getLatesProjects()
      .subscribe(
        data => this.handleProjectSuccess(data),
        error => this.handleError(error)
      );
  }

  handleProjectSuccess(data) {
    this.foundProjects = data;
    // console.log(this.foundProjects);
  }

  handleError(error) {
    console.log(error);
  }

}
