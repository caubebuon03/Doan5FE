import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from '../customer/login/login.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
  
  
]; 



@NgModule({
  declarations: [CartComponent,LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerModule { }
