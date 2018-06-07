import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  newVal = "Trileo";
  Serviceval1 = "";
  cars = [];

  constructor() { }

  getResult(val){
    this.Serviceval1 = val.target.value;
    console.log(this.Serviceval1);
  }

}
