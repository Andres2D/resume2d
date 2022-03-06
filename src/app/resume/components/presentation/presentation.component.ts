import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

  name: string = 'Andres Alcaraz C.';
  description: string = 'Software Engineer';
  aboutMe: string = `
    Hi, I'm Andres. I'm a software engineer from Colombia, 
    committed to my work. I enjoy learning new ways to write code 
    and to improve my skills. Every day I try to do it better than 
    the last day. Also enjoy the music, playing video games and football. 
  `;

}
