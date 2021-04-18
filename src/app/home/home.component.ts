import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../shared/theme.service';
import { GithubService } from '../shared/github.service';

import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;
  recentProjects: any[];
  foundProjects: any[];

  constructor(private scully: ScullyRoutesService,
    private githubService: GithubService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    return this.githubService.getLatestProjects()
      .subscribe(
        data => this.handleProjectSuccess(data),
        error => this.handleError(error)
      );
  }

  handleProjectSuccess(data) {
    this.foundProjects = data;
    this.recentProjects = [];

    for (let i = 0; i < 3; i++) {
      this.recentProjects.push(this.foundProjects[i]);
    }
  }

  handleError(error) {
    console.log(error);
  }

}
