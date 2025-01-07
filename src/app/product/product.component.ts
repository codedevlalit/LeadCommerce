import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  identification: string = '';
  imageSrc: string | undefined;

    constructor(private route: ActivatedRoute, private router: Router) {
  
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
}
