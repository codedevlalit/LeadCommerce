import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData = 
  {
    products: [],
    total: 0,
  }

  cartDataObs$ = new BehaviorSubject(this.cartData);


  addProduct(arg0: { id: any; quantity: any;  }) 
  {
    this.cartData.total ++;
    this.cartDataObs$.next({ ...this.cartData });
  }

  constructor() { }
}
