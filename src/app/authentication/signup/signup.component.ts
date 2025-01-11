import { Component } from '@angular/core';

// Decorator that marks a class as an Angular component and provides configuration metadata
@Component({
  // The CSS selector that identifies this component in a template
  selector: 'app-signup',
  // List of modules or components to import
  imports: [],
  // Path to the HTML template file for this component
  templateUrl: './signup.component.html',
  // Path to the CSS file for this component
  styleUrl: './signup.component.css'
})
// The class that defines the component's behavior
export class SignupComponent {

}
