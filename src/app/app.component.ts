import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendario';
  visible= true;
  quien='joker';
  decirAdios(){
    this.visible = false;
  }

}
