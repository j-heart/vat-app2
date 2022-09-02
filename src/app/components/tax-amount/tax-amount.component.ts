import { Component, OnInit } from '@angular/core';
import { FinalDataService } from 'src/app/services/FinalData/final-data.service';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.scss']
})
export class TaxAmountComponent implements OnInit {

  constructor(public _finaldataservice: FinalDataService) { }

  ngOnInit(): void {
  }

}
