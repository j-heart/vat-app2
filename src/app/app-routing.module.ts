import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { InputdetailComponent } from './components/inputdetail/inputdetail.component';

const routes: Routes = [
  
  {
    path: '',
    component: InputdetailComponent
  },
  {
    path: 'confirm',
    component: ConfirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
