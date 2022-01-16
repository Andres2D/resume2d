import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  description: string = `
    I'm a software developer committed to my work, I enjoy creating quality and creative solutions,
    I specialize in web development focused on Frontend, I am finishing my college carrer in software 
    engineering and I already have extensive experience in the field as a developer,
    I like the football and videogames, I also enjoy good music.
  `;
}
