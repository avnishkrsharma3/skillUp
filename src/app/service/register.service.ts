import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:8084/user/users'
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    //token generate
    console.log(user);
    return this.http.post(`${this.url}`, user);
  }

}
