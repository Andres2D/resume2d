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
      workPlace: 'NumRot',
      roleName: 'Web Analist',
      from: 2019,
      to: null,
      description: 'Proveedor de facturación eletrónica'
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
