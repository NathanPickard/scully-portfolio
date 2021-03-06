import { Component, OnInit, Output } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';

import { SideNavService } from '../side-nav.service';

import { ThemeService } from '../shared/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isDarkTheme: Observable<boolean>
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = false;


  constructor(private sideNavService: SideNavService,
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    console.log("ngOnInit: ", this.isDarkTheme);
  }

  toggleSidenav() {
    this.sideNavService.toggleNav();
  }

  // toggleTheme(): void {
  //   this.isDark = !this.isDark;
  //   if (this.isDark) {
  //     this.overlayContainer.getContainerElement().classList.add('dark-theme');
  //   } else {
  //     this.overlayContainer.getContainerElement().classList.remove('dark-theme');
  //   }
  // }


  toggleDarkTheme(isDarkTheme: boolean) {
    console.log(isDarkTheme);
    this.themeService.setDarkTheme(isDarkTheme);
  }

}
