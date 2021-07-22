import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../../../interfaces/social-media.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  socialMedia: SocialMedia[] = [
    {
      name: 'github.com/Andres2D',
      link: 'https://github.com/Andres2D',
      logo: '../../../../assets/images/github-logo.svg',
      isEmail: false
    },
    {
      name: 'linkedin/andres-alcaraz',
      link: 'https://www.linkedin.com/in/andres-alcaraz',
      logo: '../../../../assets/images/linkedin-logo.svg',
      isEmail: false
    },
    {
      name: 'andres2d1997.1206@gmail.com',
      link: 'andres2d1997.1206@gmail.com',
      logo: '../../../../assets/images/gmail-logo.svg',
      isEmail: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  
  GotoLink(url: string, isEmail: boolean){

    if(isEmail){
      const email = `mailto:abc@abc.com?subject=files&body=${url}`;
      window.location.href = email;
    }else{
      window.open(url, "_blank");
    }
  }
}
