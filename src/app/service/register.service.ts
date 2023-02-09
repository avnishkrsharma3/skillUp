import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:8084/user/'
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    //token generate
    return this.http.post(`${this.url}`, user);
  }

}
