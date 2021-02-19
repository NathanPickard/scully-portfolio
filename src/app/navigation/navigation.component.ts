import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = false;

  constructor(private sideNavService: SideNavService,
    private overlayContainer: OverlayContainer) { }

  ngOnInit(): void { }

  toggleSidenav() {
    this.sideNavService.toggleNav();
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
  }

}
