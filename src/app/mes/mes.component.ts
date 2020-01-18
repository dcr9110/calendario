import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {

  diasDeSemana: string[] =["Domingo", "Lunes", "Martes", "Miercoles",
                          "Jueves", "Viernes", "Sabado"]
  semanaNum: number[] = [1, 2, 3, 4, 5, 6];

  agendaDeSemana: string[] = ["libre", "libre", "libre", "libre",                                 "libre", "libre", "libre"];

  nombreDeMes: string = "MES";

  constructor() { }

  ngOnInit() {
  }

}
