import { Component } from '@angular/core';
import { CommonFunctions } from '../../core/utilities/common.functions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule], // Import CommonModule and FormsModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  emailOrPhoneNumberText: string = '';
  otp: string = '';
  isOtpvisible: boolean = false;



  onContinueButtonClicked() 
  {
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
  }


}


