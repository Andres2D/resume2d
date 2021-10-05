import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { }

  changeTheme(theme: string) {
    console.log(this.linkTheme);
    console.log(theme);
    
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
  }
}
