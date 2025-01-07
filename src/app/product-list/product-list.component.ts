import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  category: string = '';
  items = [{ id: 1, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 }];

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

    this.route.params.subscribe(params => { this.category = params['category']; });
    
  }

  ngDoCheck() 
  {
    this.loadproducts();    
  }

  ngOnDestroy() 
  {
    
  }

  loadproducts() 
  {
    this.items = [
      { id: 1, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
      { id: 2, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
      { id: 3, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
      { id: 4, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
      { id: 5, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
      { id: 6, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
      { id: 7, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
      { id: 8, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
      { id: 8, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
      { id: 10, src: `assets/images/${this.category}`, title: 'Product 1', price: 100 },
    ];
  }

  onSelect(item: any)  
  {
    debugger;
    this.router.navigate(['/product', item.src]);  

  }

}
