import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../../../interfaces/work-experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  works: WorkExperience[] = [
    {
      workPlace: 'Wolox',
      roleName: 'Frontend Developer',
      from: 2021,
      to: null,
      description: 'Techs solutions'
    },
    {
      workPlace: 'NumRot',
      roleName: 'Web Analist',
      from: 2019,
      to: 2021,
      description: 'Electronic billing provider'
    },
    {
      workPlace: 'MotoFox',
      roleName: 'Administrative',
      from: 2015,
      to: 2018,
      description: 'Familiar business'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
