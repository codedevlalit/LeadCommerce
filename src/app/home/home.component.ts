import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
   imports: [NgbModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true  
})
export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1270/300`);
}
