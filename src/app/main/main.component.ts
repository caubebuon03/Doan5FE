import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { BaseComponent } from '../lib/base-component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {
  list_item:any;
  menus:any;
  total:any;
  brands:any;

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('/api/product/get-all'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.list_item = res[0];
      setTimeout(() => {
        this.loadScripts();
      });

      this._api.get('/api/category/get-category').takeUntil(this.unsubscribe).subscribe(res => {
        this.menus = res;
        
      }); 
      this._cart.items.subscribe((res) => {
        this.total = res? res.length:0;
      });

      this._api.get('/api/brand/get-brand').takeUntil(this.unsubscribe).subscribe(res => {
        this.brands = res;
        
      }); 
      this._cart.items.subscribe((res) => {
        this.total = res? res.length:0;
      });
      
    }, err => {});
  }

  addToCart(it) { 
    this._cart.addToCart(it);
    alert('Thêm thành công!'); 
  }
}
