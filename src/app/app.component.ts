import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bill: number;
  numOfPeople: number;
  tipAmount:number;
  totalAmount:number;
  tip:number;
  finalTip:number;
  custom:number;
  toggle0:boolean;
  toggle1:boolean;
  ngOnInit() {
    this.bill = 0;
    this.numOfPeople = 1;
    this.tipAmount = 0.0;
    this.totalAmount = 0.0;
    this.tip = 5;
    this.finalTip = 5;
    this.custom = null;
    this.toggle0 = false;
    this.toggle1 = false;
  }
  displayTipAndTotal(){
    this.tipAmount = this.bill/this.numOfPeople*(this.finalTip/100);
    this.totalAmount = this.bill/this.numOfPeople + this.tipAmount;
  }
  validateBill(){
    if(this.bill < 0){
      this.bill = 0;
    }
    this.displayTipAndTotal();
  }
  validatePeople(){
    if (this.numOfPeople > 100) {
      this.numOfPeople = 100;
    } else if (this.numOfPeople < 1) {
      this.numOfPeople = 1;
    }
    this.displayTipAndTotal();
  }
  validateTip(){
    if (isNaN(Number(this.custom))==false){
      this.finalTip=this.custom;
      this.tip=0;
      this.displayTipAndTotal();
    }
  }
  changeTipPercent(value:number){
    this.custom = null;
    //change state of button
    this.tip = value;
    this.finalTip = value;
    this.displayTipAndTotal();
  }
}
