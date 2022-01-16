import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../interfaces/skills.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsFrontend: Skill[] = [
    {
      name: 'HTML',
      description: 'Intermediate-advanced knowledge in HTML5',
      logo: '../../../../assets/images/html5-logo.png',
      styleClass: 'htmlHover'
    },
    {
      name: 'CSS',
      description: 'Intermediate-advanced knowledge in CSS3',
      logo: '../../../../assets/images/css3-logo.png',
      styleClass: 'cssHover'
    },
    {
      name: 'Sass',
      description: 'Advanced knowledge in preprocessor Sass',
      logo: '../../../../assets/images/sass-logo.png',
      styleClass: 'sassHover'
    },
    {
      name: 'JS',
      description: 'Advanced knowledge in JavaScript ES6',
      logo: '../../../../assets/images/javascript-logo.png',
      styleClass: 'jsHover'
    },
    {
      name: 'TS',
      description: 'Advanced knowledge in TypeScript',
      logo: '../../../../assets/images/typescript-logo.png',
      styleClass: 'tsHover'
    },
    {
      name: 'Angular',
      description: 'Advanced knowledge in Angular',
      logo: '../../../../assets/images/angular-logo.png',
      styleClass: 'angularHover'
    }
  ];

  skillsBackend: Skill[] = [
    {
      name: 'NODE JS',
      description: 'Intermediate knowledge in Node JS REST API',
      logo: '../../../../assets/images/nodejs-logo.png',
      styleClass: 'nodeHover'
    },
    {
      name: 'ASP .Net Core',
      description: 'Basic knowledge in ASP .Net Core oriented towards microservices',
      logo: '../../../../assets/images/NETCore-logo.png',
      styleClass: 'netHover'
    },
    {
      name: 'MySql',
      description: 'Basic-intermediate knowledge in relational databases MySql, MariaDB',
      logo: '../../../../assets/images/mysql-logo.png',
      styleClass: 'mysqlHover'
    },
    {
      name: 'MongoDB',
      description: 'Basic-intermediate knowledge in NoSQL data base',
      logo: '../../../../assets/images/mongo-logo.png',
      styleClass: 'mongoHover'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
