import { Component, OnInit } from '@angular/core';
import { FinalDataService } from 'src/app/services/FinalData/final-data.service';
import { MonthComponent } from '../month/month.component';

@Component({
  selector: 'app-inputdetail',
  templateUrl: './inputdetail.component.html',
  styleUrls: ['./inputdetail.component.scss']
})
export class InputdetailComponent implements OnInit {

  constructor(private _finaldataservice: FinalDataService) { }

  ngOnInit(): void {
    
  }

  typeResult:string='0';

  setResult(string: string) {
    this.typeResult = string
    
  }

  setFilingType(string: string) {
    this._finaldataservice.filingType = string;
  }
  
  setPenalty(num: number) {
    this._finaldataservice.penalty = num;
  }

  setSurcharge(num: number) {
    this._finaldataservice.surcharge = num;
  }
}
