import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  title = 'Calculator';
  
  num1 : any
  num2 : any
  rez : any;

  Saberi(){
  this.rez = this.num1 + this.num2;
  }
 
  Oduzmi(){
    this.rez = this.num1 - this.num2;
  }

  Pomnozi(){
    this.rez = this.num1 * this.num2;
  }

  Podeli(){
      this.rez = this.num1 / this.num2;
  }
 
}