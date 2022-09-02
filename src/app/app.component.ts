import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vat-app';

  myrouterLink='/input'
  
  setrouterLink1(){
    this.myrouterLink = '/input'
  }

  setrouterLink2(){
    this.myrouterLink = '/input/confirm'
  }
}
