import { Component } from '@angular/core';
import { Skill } from '../../../interfaces/skills.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

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

  othersSkills: Skill[] = [
    {
      name: 'git',
      description: 'Intermediate knowledge in version control system',
      logo: '../../../../assets/images/git-logo.png',
      styleClass: 'git'
    },
    {
      name: 'GitHub',
      description: 'Intermediate knowledge in GitHub cloud version control',
      logo: '../../../../assets/images/github-logo.png',
      styleClass: 'gitHub'
    },
    {
      name: 'GitLab',
      description: 'Basic knowledge in GitLab cloud version control',
      logo: '../../../../assets/images/gitlab-logo.svg',
      styleClass: 'gitLab'
    },
    {
      name: 'contentful',
      description: 'Basic knowledge in content management platform contenful',
      logo: '../../../../assets/images/contentful-logo.png',
      styleClass: 'cms'
    },
    {
      name: 'Jest',
      description: 'Intermediate knowledge in JavaScript testing framework JEST',
      logo: '../../../../assets/images/jest-logo.png',
      styleClass: 'jest'
    },
    {
      name: 'Storybook',
      description: 'Intermediate knowledge UI tool Storybook',
      logo: '../../../../assets/images/storybooks-logo.svg',
      styleClass: 'storybooks'
    },
  ];
}

