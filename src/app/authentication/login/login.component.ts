import { Component } from '@angular/core';
import { CommonFunctions } from '../../core/utilities/common.functions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule], // Import CommonModule and FormsModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  /**
   *
   */
  constructor(private router: Router) {
    
    
  }

  emailOrPhoneNumberText: string = '';
  otpText: string = '';
  isOtpvisible: boolean = false;



  onContinueButtonClicked() 
  {

  if(!CommonFunctions.isNullOrUndefinedOrEmpty(this.emailOrPhoneNumberText) &&
  !CommonFunctions.isNullOrUndefinedOrEmpty(this.otpText))
  {
    this.router.navigate(['/home']);  
  }

    debugger; 
    if(CommonFunctions.isNullOrUndefinedOrEmpty(this.emailOrPhoneNumberText))
      {
        alert('Email or Phone Number is required');
        return;
      }

      if(this.emailOrPhoneNumberText.includes('@'))
      {
        // Send OTP to email
      }else
      {
        // Send OTP to phone number
      }

      this.isOtpvisible = true;

      
  }

  

}


