import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

}
