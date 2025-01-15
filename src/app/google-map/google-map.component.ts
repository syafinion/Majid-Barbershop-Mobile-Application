import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {

  text: string;
  constructor() {
    console.log('Hello GoogleMapComponent Component');
    this.text = 'Hello World';
   }

  

  ngOnInit() {}


}
