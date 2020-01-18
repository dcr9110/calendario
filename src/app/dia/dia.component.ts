import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {
  @Input() manianas;
  @Input() tardes;
  constructor() { }

  ngOnInit() {
  }

}
