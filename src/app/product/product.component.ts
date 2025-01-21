import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  identification: string = '';
  imageSrc: string | undefined;

    constructor(private route: ActivatedRoute, private router: Router, private _cart: CartService) {
  
    }
  
  ngOnInit() {

    this.route.params.subscribe(params => 
      { 
        this.imageSrc = this.identification = params['identification']; 
       
      });
    
  }

  ngDoCheck()
  {
    
  }

  addToCart(): void {
    this._cart.addProduct({
      id: 1,
      quantity: 1,
    
    });
  }
}
