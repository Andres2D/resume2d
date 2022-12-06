import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  aboutMe: string = `
    Hi, I'm Andres. I'm a software engineer from Colombia, 
    committed to my work. I enjoy learning new ways to write code 
    and to improve my skills. Every day I try to do it better than 
    the day before. Also enjoy the music, playing video games and football. 
  `;

  openWESSite() {
    window.open('https://www.credly.com/badges/c109e796-0545-43a8-a2de-99ca235c8d37/public_url');
  }
}
