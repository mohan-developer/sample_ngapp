import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  className = 'SquareBox';
  classBinding = true;
  
  constructor() { }

  ngOnInit() {
  }

  switchingCalss(){
    if(this.classBinding == true){
      this.classBinding = false;
    }else{
      this.classBinding = true;
    }
  }
}
