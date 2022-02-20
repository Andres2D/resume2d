import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../../../interfaces/social-media.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  socialMedia: SocialMedia[] = [
    {
      name: 'github.com/Andres2D',
      link: 'https://github.com/Andres2D',
      logo: '../../../../assets/SVG/github.svg',
      isEmail: false
    },
    {
      name: 'linkedin/andres-alcaraz',
      link: 'https://www.linkedin.com/in/andres-alcaraz',
      logo: '../../../../assets/SVG/linkedin.svg',
      isEmail: false
    },
    {
      name: 'andres2d1997.1206@gmail.com',
      link: 'andres2d1997.1206@gmail.com',
      logo: '../../../../assets/images/gmail-logo.svg',
      isEmail: true
    },
    {
      name: 'HackerRank',
      link: 'https://www.hackerrank.com/andres2d?hr_r=1',
      logo: '../../../../assets/SVG/hackerrank.svg',
      isEmail: false
    },
    {
      name: 'stackblitz',
      link: 'https://stackblitz.com/@Andres2D',
      logo: '../../../../assets/SVG/stackblitz.png',
      isEmail: false
    },
    {
      name: 'codepen',
      link: 'https://codepen.io/Andres2D',
      logo: '../../../../assets/SVG/codepen.svg',
      isEmail: false
    },
    {
      name: 'facebook',
      link: 'https://www.facebook.com/andres.alcaraz.794',
      logo: '../../../../assets/SVG/facebook.svg',
      isEmail: false
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/andres.2d',
      logo: '../../../../assets/SVG/instagram.svg',
      isEmail: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  
  GotoLink(url: string, isEmail: boolean){

    if(isEmail){
      const email = `mailto:andres2d1997.1206@gmail.com?subject=files&body=${url}`;
      window.location.href = email;
    }else{
      window.open(url, "_blank");
    }
  }
}
