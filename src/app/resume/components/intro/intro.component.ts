import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize({target}: any) {
    this.defineHeight(target.innerHeight);
  }

  ngOnInit(): void {
    this.defineHeight(window.innerHeight);
  }

  goToAbout(): void {
    let el = document.getElementById('about');
    el?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  defineHeight(value: number): void {
    document.documentElement.style.setProperty('--doc-height', `${value}px`);
  }
}
