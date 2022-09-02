import { Component, OnInit } from '@angular/core';
import { FinalDataService } from 'src/app/services/FinalData/final-data.service';
import {DataFinal} from '../../data-final.model'

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  constructor(public _finaldataservice: FinalDataService) { }

  ngOnInit(): void {
  }
  value: any = '';

  setMonth(Month: string) {
    this._finaldataservice.month = Month;
    console.log(this._finaldataservice.month);
    

  }

}
