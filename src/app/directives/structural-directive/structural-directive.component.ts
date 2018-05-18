import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  currentstatus = false;
  currentHero = {
    name : 'mohan',
    number: 555
  }

  constructor() { }

  ngOnInit() {
  }

}
