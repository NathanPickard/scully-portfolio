import { Component, OnInit } from '@angular/core';

import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio-root',
  templateUrl: './portfolio-root.component.html',
  styleUrls: ['./portfolio-root.component.scss']
})
export class PortfolioRootComponent implements OnInit {
  portfolio$: Observable<ScullyRoute[]>;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.portfolio$ = this.scully.available$.pipe(
      map(routeList => {
        return routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/portfolio/`));
      })
    );
  }

}
