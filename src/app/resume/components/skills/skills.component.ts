import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../interfaces/skills.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsFrontend: Skill[] = [
    {
      name: 'HTML',
      description: 'Conocimientos intermedio-avanzado en HTML5',
      logo: '../../../../assets/images/html5-logo.png',
      styleClass: 'htmlHover'
    },
    {
      name: 'CSS',
      description: 'Conocimientos intermedio-avanzado en CSS3',
      logo: '../../../../assets/images/css3-logo.png',
      styleClass: 'cssHover'
    },
    {
      name: 'JS',
      description: 'Conocimientos avanzado en JavaScript ES6',
      logo: '../../../../assets/images/javascript-logo.png',
      styleClass: 'jsHover'
    },
    {
      name: 'TS',
      description: 'Conocimientos avanzado en TypeScript',
      logo: '../../../../assets/images/typescript-logo.png',
      styleClass: 'tsHover'
    },
    {
      name: 'Angular',
      description: 'Conocimientos avanzado en Angular',
      logo: '../../../../assets/images/angular-logo.png',
      styleClass: 'angularHover'
    }
  ];

  skillsBackend: Skill[] = [
    {
      name: 'ASP .Net Core',
      description: 'Conocimientos básicos en ASP .Net Core orientado a microservicios',
      logo: '../../../../assets/images/NETCore-logo.png',
      styleClass: 'netHover'
    },
    {
      name: 'MySql',
      description: 'Conocimientos básico-intermedio en bases de datos relacionales MySql, MariaDB',
      logo: '../../../../assets/images/mysql-logo.png',
      styleClass: 'mysqlHover'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
