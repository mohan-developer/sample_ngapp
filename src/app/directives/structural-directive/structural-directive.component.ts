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

  dates = [
    {mydate:'1992-01-10',author:'dhoni'},
    {mydate:'February 3, 2001',author:'dhoni'},
    {mydate:'2018-05-21',author:'dhoni'},
    {mydate:'2017-07-11',author:'dhoni'}
  ];

  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

getSuffix(dat){
    switch (dat % 10) {
      case 1:  return dat+"<sup>st</sup>";
      case 2:  return dat+"<sup>nd</sup>";
      case 3:  return dat+"<sup>rd</sup>";
      default: return dat+"<sup>th</sup>";
    }
  }

  formatMyDate(d,author){
    let a = new Date(d);
   return this.months[a.getMonth()]+' <strong>'+this.getSuffix(a.getDate())+'</strong> '+a.getFullYear() + author;
  }

}
