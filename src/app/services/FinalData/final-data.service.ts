import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinalDataService {

  constructor() { }

  public filingType: string = 'Ordinary Filing';
  public month: string = 'January';
  public year: string = '2020';
  public saleAmount: number = 0.00;
  public taxAmount: number = 0.00;
  public surcharge: number = 0.00;
  public penalty: number = 200.00;
  public totalAmount: number = 0.00;

}