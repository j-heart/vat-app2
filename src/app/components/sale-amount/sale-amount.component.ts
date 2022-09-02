import { Component, OnInit } from '@angular/core';
import { FinalDataService } from 'src/app/services/FinalData/final-data.service';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.scss']
})
export class SaleAmountComponent implements OnInit {

  constructor(public _finaldataservice: FinalDataService) { }

  ngOnInit(): void {
  }

  setSaleAmount(val: string) {
    let num = Number(val);
    this.Shit = num.toFixed(2);
    num = Number(this.Shit)
    this._finaldataservice.saleAmount = num;    
  }

  Shit:string = '';

  setTaxAmount(val: string) {
    let num = Number(val);
    num = num * 0.07;
    this.Shit = num.toFixed(2);
    num = Number(this.Shit)
    this._finaldataservice.taxAmount = num;
  }

  setsurcharge() {
    let num = this._finaldataservice.taxAmount;
    num = Number(num);
    num = num * 0.1;
    this.Shit = num.toFixed(2);
    num = Number(this.Shit)
    this._finaldataservice.surcharge = num;
  }

  setTotal() {
    let num = (this._finaldataservice.taxAmount + this._finaldataservice.surcharge + this._finaldataservice.penalty);
    num = Number(num);
    this._finaldataservice.totalAmount = num;
  }

  OnlyNumberAllowed(event: any):boolean{
    const charCode = (event.which)?event.which: event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)){
      console.log(charCode);
      return false;
    }
    return true;
  }
}
