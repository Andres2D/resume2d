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
      preview: '../../../../assets/images/cotejo-app.png',
      urlDeploy: 'https://cotejo-app-beta.netlify.app/login',
      urlRepository: 'https://github.com/Andres2D/cotejo-app-front',
      engine: [
        {
          name: 'Angular',
          svgSrc: '../../../../assets/SVG/angular-icon.svg',
          width: '25px',
          height: ''
        },
        {
          name: 'Node.js',
          svgSrc: '../../../../assets/SVG/nodejs-icon.svg',
          width: '25px',
          height: ''
        },
        {
          name: 'google-developers',
          svgSrc: '../../../../assets/SVG/google-developers.svg',
          width: '30px',
          height: ''
        },
        {
          name: 'mongodb',
          svgSrc: '../../../../assets/SVG/mongodb.svg',
          width: '70px',
          height: ''
        }
      ]
    },
    {
      name: 'Landing page WOLOX',
      description: 'A landing page as a challenge from WOLOX',
      preview: '../../../../assets/images/landing-page.png',
      urlDeploy: 'https://flamboyant-rosalind-288be8.netlify.app/main',
      urlRepository: 'https://github.com/Andres2D/landingpage-wx',
      engine: [
        {
          name: 'Angular',
          svgSrc: '../../../../assets/SVG/angular-icon.svg',
          width: '25px',
          height: ''
        }
      ]
    },
    {
      name: 'MotoFox App',
      description: 'Static WebSite to launch information about a local businesses',
      preview: '../../../../assets/images/motofox-app.png',
      urlDeploy: 'https://motofox-belen.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/moto-fox-webapp',
      engine: [
        {
          name: 'Angular',
          svgSrc: '../../../../assets/SVG/angular-icon.svg',
          width: '25px',
          height: ''
        },
        {
          name: 'Contentful',
          svgSrc: '../../../../assets/SVG/contentful.svg',
          width: '25px',
          height: ''
        }
      ]
    },
    {
      name: "Don't Guess",
      description: 'Trivias app based on public API, build with React',
      preview: '../../../../assets/images/dont-guess.png',
      urlDeploy: 'https://dont-guess-beta.netlify.app/main',
      urlRepository: 'https://github.com/Andres2D/responsa-master-react',
      engine: [
        {
          name: 'React',
          svgSrc: '../../../../assets/SVG/react.svg',
          width: '25px',
          height: ''
        },
        {
          name: 'Redux',
          svgSrc: '../../../../assets/SVG/redux.svg',
          width: '25px',
          height: ''
        }
      ]
    },
    {
      name: 'CountriesApp',
      description: 'Get the last information about geography',
      preview: '../../../../assets/images/countries-app.png',
      urlDeploy: 'https://countries-app-2d.netlify.app/countries',
      urlRepository: 'https://github.com/Andres2D/countriesApp',
      engine: [
        {
          name: 'React',
          svgSrc: '../../../../assets/SVG/react.svg',
          width: '25px',
          height: ''
        },
        {
          name: 'Typescript',
          svgSrc: '../../../../assets/SVG/typescript-icon.svg',
          width: '25px',
          height: ''
        }
      ]
    },
    {
      name: 'Admin App',
      description: 'Application to admin users and employees of a hospital',
      preview: '../../../../assets/images/admin-pro.png',
      urlDeploy: 'https://adm1npr0.herokuapp.com/login',
      urlRepository: 'https://github.com/Andres2D/adminPro',
      engine: [
        {
          name: 'Angular',
          svgSrc: '../../../../assets/SVG/angular-icon.svg',
          width: '25px',
          height: ''
        },
        {
          name: 'google-developers',
          svgSrc: '../../../../assets/SVG/google-developers.svg',
          width: '30px',
          height: ''
        },
      ]
    },
    {
      name: 'GifsApp',
      description: 'Basic gifs search using giphy API',
      preview: '../../../../assets/images/gifs-app.png',
      urlDeploy: 'https://dazzling-roentgen-b4be77.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/gifsApp',
      engine: [
        {
          name: 'Angular',
          svgSrc: '../../../../assets/SVG/angular-icon.svg',
          width: '25px',
          height: ''
        }
      ]
    },
    {
      name: 'MapsApp',
      description: 'A Map application using Mapbox',
      preview: '../../../../assets/images/maps-app.png',
      urlDeploy: 'https://dazzling-hawking-69f7b6.netlify.app',
      urlRepository: 'https://github.com/Andres2D/mapsApp',
      engine: [
        {
          name: 'Angular',
          svgSrc: '../../../../assets/SVG/angular-icon.svg',
          width: '25px',
          height: ''
        },
        {
          name: 'Mapbox',
          svgSrc: '../../../../assets/SVG/mapbox-icon.svg',
          width: '25px',
          height: ''
        }
      ]
    },
    {
      name: '2Dice Game',
      description: 'Dice game created on React',
      preview: '../../../../assets/images/dice-app.png',
      urlDeploy: 'https://2dice-game.netlify.app/',
      urlRepository: 'https://github.com/Andres2D/react-dice-game',
      engine: [
        {
          name: 'React',
          svgSrc: '../../../../assets/SVG/react.svg',
          width: '25px',
          height: ''
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  
  GoApplication(url: string){
    window.open(url, "_blank");
  }
}
