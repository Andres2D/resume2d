import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-theme-control',
  templateUrl: './theme-control.component.html',
  styleUrls: ['./theme-control.component.scss']
})
export class ThemeControlComponent {

  constructor(private settings: SettingsService) { }

  changeTheme(dark: boolean): void {
    const theme = dark ? 'dark-theme' : 'light-theme';
    this.settings.changeTheme(theme);
  }
}
