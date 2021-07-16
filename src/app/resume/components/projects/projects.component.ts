import { Component, OnInit } from '@angular/core';
import { Project } from '../../../interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      name: 'GifsApp',
      description: 'Basic gifs search using giphy API',
      preview: 'https://media.giphy.com/media/cOKjNdJDbqNCm4n0Jm/giphy.gif',
      urlDeploy: 'https://dazzling-roentgen-b4be77.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/gifsApp'
    },
    {
      name: 'CountriesApp',
      description: 'Get the last information about geography',
      preview: 'https://media.giphy.com/media/duud6Q9AILpj86w76x/giphy.gif',
      urlDeploy: 'https://friendly-bartik-91a05b.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/countriesApp'
    },
    {
      name: 'Landing page WOLOX',
      description: 'A landindg page as challenge from WOLOX',
      preview: 'https://media.giphy.com/media/xT77Y1T0zY1gR5qe5O/giphy.gif',
      urlDeploy: 'https://flamboyant-rosalind-288be8.netlify.app/main',
      urlRepository: 'https://github.com/Andres2D/landingpage-wx'
    },
    {
      name: 'MapsApp',
      description: 'A Map application using mapbox',
      preview: 'https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/giphy.gif',
      urlDeploy: 'https://dazzling-hawking-69f7b6.netlify.app',
      urlRepository: 'https://github.com/Andres2D/mapsApp'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  
  GoApplication(url: string){
    window.open(url, "_blank");
  }
}
