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
      progress: '80%'
    },
    {
      name: 'CSS',
      progress: '70%'
    },
    {
      name: 'Sass',
      progress: '50%'
    },
    {
      name: 'JS',
      progress: '70%'
    },
    {
      name: 'TS',
      progress: '60%'
    },
    {
      name: 'Angular',
      progress: '90%'
    },
    {
      name: 'React',
      progress: '30%'
    }
  ];

  skillsBackend: Skill[] = [
    {
      name: 'NODE JS',
      progress: '50%'
    },
    {
      name: 'ASP .Net Core',
      progress: '30%'
    },
    {
      name: 'MySql',
      progress: '30%'
    },
    {
      name: 'MongoDB',
      progress: '40%'
    }
  ];

  othersSkills: Skill[] = [
    {
      name: 'git',
      progress: '80%'
    },
    {
      name: 'GitHub',
      progress: '80%'
    },
    {
      name: 'GitLab',
      progress: '60%'
    },
    {
      name: 'contentful',
      progress: '30%'
    },
    {
      name: 'Jest',
      progress: '80%'
    },
    {
      name: 'Storybook',
      progress: '50%'
    },
  ];
}

