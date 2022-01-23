import { Component } from '@angular/core';
import { WorkExperience } from '../../../interfaces/work-experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  works: WorkExperience[] = [
    {
      workPlace: 'Wolox',
      roleName: 'Frontend Developer',
      from: 2021,
      to: null,
      description: 'Techs solutions',
      link: 'https://www.wolox.com.ar/'
    },
    {
      workPlace: 'NumRot',
      roleName: 'Web Analist',
      from: 2019,
      to: 2021,
      description: 'Electronic billing provider',
      link: 'https://www.numrot.com/'
    },
    {
      workPlace: 'MotoFox',
      roleName: 'Administrative',
      from: 2015,
      to: 2018,
      description: 'Familiar business',
      link: 'https://motofox-belen.netlify.app/'
    }
  ];

  goToPage(url: string): void {
    console.log('in');
    window.open(url, '_blank');
  }
}
