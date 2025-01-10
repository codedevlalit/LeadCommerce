import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapCart, bootstrapPersonCircle } from '@ng-icons/bootstrap-icons';

@Component({
  imports: [ RouterModule, NgIcon],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideIcons({ bootstrapCart, bootstrapPersonCircle })],

})
export class HeaderComponent {

}