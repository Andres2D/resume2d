import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  description: string = `
    Hi, I'm Andres. I'm a software engineer from Colombia, 
    committed to my work. I enjoy learning new ways to write code 
    and to improve my skills. Every day I try to do it better than 
    the last day. Also enjoy the music, playing video games and football. 
  `;
}
