import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newTitle = "PriceComponent";

  newComponent = "";
  trigger(value){
    this.newComponent = value;
  }
}
