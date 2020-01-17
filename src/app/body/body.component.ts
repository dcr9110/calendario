import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  //dia
  maniana = ["Media Noche", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  tarde = ["Medio Dia", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  
  constructor() { }

  ngOnInit() {
  }

}
