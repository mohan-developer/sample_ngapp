import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  isColor = true;
  isBg = true;
  isEmfont = true;
  isPerfont = true;
  isSpecial = true;

  currentStyles = {
    'font-style' : 'italic',
    'font-size' : '14px',
    'font-weight' : 'normal'
  };

  constructor() { }

  ngOnInit() {
  }

  styleToggle(val){
    if(val === 'color'){
      if(this.isColor == true){
        this.isColor = false;
      }
      else{ 
        this.isColor = true;
      }
    }else if(val === 'bg'){
      if(this.isBg == true){
        this.isBg = false;
      }
      else{
        this.isBg = true;
      }
    }else if(val === 'fontEm'){
      if(this.isEmfont == true){
        this.isEmfont = false;
      }
      else{
        this.isEmfont = true;
      }
    }else if(val === 'fontPer'){
      if(this.isPerfont == true){
        this.isPerfont = false;
      }
      else{
        this.isPerfont = true;
      }
    }else if(val === 'size'){
      if(this.isSpecial == true){
        this.isSpecial = false;
      }else {
        this.isSpecial = true;
      }
    }
   
  }

}
