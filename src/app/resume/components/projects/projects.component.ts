import { Component, OnInit } from '@angular/core';
import { Project } from '../../../interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  /*
  https://media.giphy.com/media/cOKjNdJDbqNCm4n0Jm/giphy.gif
  */


  projects: Project[] = [
    {
      name: 'Cotejo App',
      description: 'A funny application to schedule matchs of football',
      preview: '../../../../assets/images/cotejoAppPreview.png',
      urlDeploy: 'https://cotejo-app-beta.netlify.app/login',
      urlRepository: 'https://github.com/Andres2D/cotejo-app-front'
    },
    {
      name: 'Landing page WOLOX',
      description: 'A landing page as a challenge from WOLOX',
      preview: '../../../../assets/images/LandingPagePreview.PNG',
      urlDeploy: 'https://flamboyant-rosalind-288be8.netlify.app/main',
      urlRepository: 'https://github.com/Andres2D/landingpage-wx'
    },
    {
      name: 'MotoFox App',
      description: 'Static WebSite to launch information about a local businesses',
      preview: '../../../../assets/images/motofoxappPreview.png',
      urlDeploy: 'https://motofox-belen.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/moto-fox-webapp'
    },
    {
      name: "Don't Guess",
      description: 'Trivias app based on public API, build with React',
      preview: '../../../../assets/images/dontGuessPreview.png',
      urlDeploy: 'https://dont-guess-beta.netlify.app/main',
      urlRepository: 'https://github.com/Andres2D/responsa-master-react'
    },
    {
      name: 'Admin App',
      description: 'Application to admin users and employees of a hospital',
      preview: '../../../../assets/images/adminPro.png',
      urlDeploy: 'https://adm1npr0.herokuapp.com/login',
      urlRepository: 'https://github.com/Andres2D/adminPro'
    },
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
      name: 'MapsApp',
      description: 'A Map application using Mapbox',
      preview: '../../../../assets/images/MapsAppPreview.PNG',
      urlDeploy: 'https://dazzling-hawking-69f7b6.netlify.app',
      urlRepository: 'https://github.com/Andres2D/mapsApp'
    },
    {
      name: '2Dice Game',
      description: 'Dice game created on React',
      preview: '../../../../assets/images/dice-game-perview.png',
      urlDeploy: 'https://2dice-game.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/react-dice-game'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  
  GoApplication(url: string){
    window.open(url, "_blank");
  }
}
