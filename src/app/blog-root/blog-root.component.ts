import { Component, OnInit } from '@angular/core';

import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blog-root',
  templateUrl: './blog-root.component.html',
  styleUrls: ['./blog-root.component.scss']
})
export class BlogRootComponent implements OnInit {
  // links$: Observable<ScullyRoute[]> = this.scully.available$;
  posts$: Observable<ScullyRoute[]>;
  // filteredRoutes: Observable<ScullyRoute[]>;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit() {
    // this.links$.subscribe((links) => {
    //   console.log(links);
    // });

    this.posts$ = this.scully.available$.pipe(
      map((routeList: ScullyRoute[]) =>
        // console.log(routeList);
        // return routeList.filter((route: ScullyRoute) =>
        //   route.route.startsWith(`/blog/`));
        routeList.filter(
          (route: ScullyRoute) =>
            route.route.startsWith(`/blog/`)
        )
      ), map((filteredRoutes: ScullyRoute[]) => {
        return filteredRoutes.sort((postA: ScullyRoute, postB: ScullyRoute) => {
          return ((+new Date(postB['date'])) - (+new Date(postA['date'])));
        });
      }),
    );
  }

}
