import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitietComponent } from '../product/chitiet/chitiet.component';

const routes: Routes = [
  {
    path: 'chitiet/:id',
    component: ChitietComponent,
  },
  // {
  //   path: 'list/:id',
  //   component: ListComponent,
  // },
];  


@NgModule({
  declarations: [ChitietComponent],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class ProductModule { }
