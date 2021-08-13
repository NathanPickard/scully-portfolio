import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  // isDark = false;
  private _darkTheme: Subject<boolean> = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    console.log("isDarkTheme: ", isDarkTheme);
    this._darkTheme.next(isDarkTheme);
    // console.log(this._darkTheme);
  }

}
