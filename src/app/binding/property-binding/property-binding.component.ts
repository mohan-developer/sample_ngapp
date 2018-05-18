import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  Box = 'TrileoContact';
  myColor = {
    backgroundColor: '#ffaacc',
    color: '#fff',
    padding: '25px',
    margin: '0 auto',
    width: '200px',
    textAlign: 'center'
  }
  constructor() { }

  ngOnInit() {
  }

}
