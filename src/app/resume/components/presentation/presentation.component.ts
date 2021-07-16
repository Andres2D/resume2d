import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  name: string = 'Andres Alcaraz C.';
  description: string = 'Ingeniero informático';

  constructor() { }

  ngOnInit() {
  }

}
