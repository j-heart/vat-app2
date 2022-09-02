import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { OneComponent } from './pages/one/one.component';
//import { TwoComponent } from './pages/two/two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OneService } from './services/one/one.service';
import { TwoService } from './services/two/two.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { InputdetailComponent } from './components/inputdetail/inputdetail.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { MonthComponent } from './components/month/month.component';
import { YearComponent } from './components/year/year.component';
import { SaleAmountComponent } from './components/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './components/tax-amount/tax-amount.component';
import { SurchargeComponent } from './components/surcharge/surcharge.component';
import { PenaltyComponent } from './components/penalty/penalty.component';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
const appRouters: Routes = [
 // { path: '', component: OneComponent },
 // { path: 'two', component: TwoComponent },

]

const mat = [

  MatToolbarModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    InputdetailComponent,
    NavbarComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    ConfirmComponent,
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouters),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    ...mat

  ],
  exports: [
    ...mat

  ],


  providers: [OneService, TwoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
