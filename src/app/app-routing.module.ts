import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChitietComponent } from './product/chitiet/chitiet.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
  },
  // {
  //   path: 'customer',
  //   loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule),
  // },
  {
    // path: '',
    // redirectTo: '/home',
    // pathMatch: 'full',
  },



  // {
  //   path: '',
  //   component: MainComponent,
  // },

  // {
  //   path: 'home',
  //   component: MainComponent,
  // },


  // {
  //   path: 'chitiet',
  //   component: ChitietComponent,
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }
