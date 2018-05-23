import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  directive = true;
  inlineStyle = {
    'padding': '20px',
    'backgroundColor': '#ffaacc',
    'text-align': 'center',
    'font-size': '28px'
  }
  constructor() { }

  ngOnInit() {
  }

  classToggle(){
    if(this.directive == true){
      this.directive = false;
    }
    else {
      this.directive = true;
    }
  }
}
