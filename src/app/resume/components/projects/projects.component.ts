import { Component, OnInit } from '@angular/core';
import { Project } from '../../../interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  /*
  https://media.giphy.com/media/cOKjNdJDbqNCm4n0Jm/giphy.gif
  */


  projects: Project[] = [
    {
      name: 'GifsApp',
      description: 'Basic gifs search using giphy API',
      preview: '../../../../assets/images/GifsAppPreview.PNG',
      urlDeploy: 'https://dazzling-roentgen-b4be77.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/gifsApp'
    },
    {
      name: 'CountriesApp',
      description: 'Get the last information about geography',
      preview: '../../../../assets/images/CountriesAppPreview.PNG',
      urlDeploy: 'https://friendly-bartik-91a05b.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/countriesApp'
    },
    {
      name: 'Landing page WOLOX',
      description: 'A landindg page as challenge from WOLOX',
      preview: '../../../../assets/images/LandingPagePreview.PNG',
      urlDeploy: 'https://flamboyant-rosalind-288be8.netlify.app/main',
      urlRepository: 'https://github.com/Andres2D/landingpage-wx'
    },
    {
      name: 'MapsApp',
      description: 'A Map application using mapbox',
      preview: '../../../../assets/images/MapsAppPreview.PNG',
      urlDeploy: 'https://dazzling-hawking-69f7b6.netlify.app',
      urlRepository: 'https://github.com/Andres2D/mapsApp'
    },
    {
      name: 'AuthApp',
      description: 'A basic auth application using Node as backend and JWT to auth',
      preview: '../../../../assets/images/AuthAppPreview.PNG',
      urlDeploy: 'https://angular-auth-2d.herokuapp.com/auth/login',
      urlRepository: 'https://github.com/Andres2D/AuthApp-Backend.git'
    },
    {
      name: 'Admin App',
      description: 'Application to admin users and employees of an hospital.',
      preview: '../../../../assets/images/adminPro.png',
      urlDeploy: 'https://adm1npr0.herokuapp.com/login',
      urlRepository: 'https://github.com/Andres2D/adminPro'
    },
    {
      name: 'MotoFox App',
      description: 'Static WebSite to launch information abpout a local businesses.',
      preview: '../../../../assets/images/motofoxappPreview.png',
      urlDeploy: 'https://motofox-belen.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/moto-fox-webapp'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  
  GoApplication(url: string){
    window.open(url, "_blank");
  }
}
