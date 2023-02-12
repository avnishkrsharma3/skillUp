import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
const { authBaseUrl, usersBaseUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = `${usersBaseUrl}/user/users`;
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    //token generate
    console.log(user);
    return this.http.post(`${this.url}`, user);
  }

}
