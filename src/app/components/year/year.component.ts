import { Component, OnInit } from '@angular/core';
import { FinalDataService } from 'src/app/services/FinalData/final-data.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {

  constructor(public _finaldataservice: FinalDataService) { }

  ngOnInit(): void {
  }


  setyear(year: string) {
    this._finaldataservice.year = year;
  }
}
