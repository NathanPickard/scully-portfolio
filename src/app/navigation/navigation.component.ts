import { Component, OnInit } from '@angular/core';

import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private sideNavService: SideNavService) { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.sideNavService.toggleNav();
  }

}
