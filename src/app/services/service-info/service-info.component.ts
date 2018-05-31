import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent implements OnInit {

  Name = 'Something';
  newtext = 0;
  siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  BtnEvent(inputVal){
    this.Name = inputVal;
  }
  addevent(val){
    this.Name = val.target.value;
  }
  addtc(){
    document.write("hello");
  }

}
