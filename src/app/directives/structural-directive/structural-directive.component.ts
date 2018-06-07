import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../../newservice.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  currentstatus = false;
  Serviceval ="";
  mycar = "";
  carslist = [];

  currentHero = {
    name : 'mohan',
    number: 555
  }

  constructor(private myservice: NewserviceService){
    this.myservice.newVal = this.myservice.newVal +"Website";
     this.Serviceval = this.myservice.newVal;      
  }

  getResults(val){
    this.myservice.getResult(val);
  }

  getCarName(val){
    this.mycar = val.target.value;
  }

  getCarsList(){
    this.myservice.cars.push(this.mycar);
    this.carslist = this.myservice.cars;
    console.log(this.carslist);
  }
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

   
  Records = [
    {
      name : 'mohan',
      online : true
    },
    {
      name : 'Balu',
      online : false
    },
    {
      name : 'Sumanth',
      online : true
    },
    {
      name : 'Balu',
      online : false
    },
    {
      name : 'Sumanth',
      online : true
    }
  ]

}
