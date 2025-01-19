import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private _http: HttpClient) { }
  

  async signup(user: User)
  {
    let result = await this._http.post('http://localhost:3000/signup', user);
    
  }
}
