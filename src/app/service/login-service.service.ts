import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  urlLogin='http://localhost:8081/auth/user';
  urlGetUserById = 'http://localhost:8084/user'
  authToken: any='';
  headers: any;
  constructor(private http : HttpClient, private router : Router) { }
  
  generateToken(credentials:any){
      //token generate
      return this.http.post(`${this.urlLogin}/login`, credentials);
  }
  
  loginUser(token:string, userType:string, idInteger:any){
    localStorage.setItem("token", token);
    localStorage.setItem("userType", userType);
    localStorage.setItem("userId", idInteger);
  }
  
  isLoggedIn():boolean{
    let token = localStorage.getItem("token");
    if(token!=undefined&&token!=null&&token!='')return true;
    return false;
  }
  getId(){
    if(localStorage.getItem('id')!=null)
      return localStorage.getItem('id');
    else 
      return -1;
  }

  getUserType() {
    if(localStorage.getItem('userType')!=null && localStorage.getItem('userType') != '')
      return localStorage.getItem('userType');
    else
      return '';
  }
  getLogout(){
    console.log('token removed');
    localStorage.removeItem('token'); 
    console.log('user type removed');
    localStorage.removeItem('userType');
    this.router.navigate(['login']);
  }
  getUserDetailsAfterLogin(){
    // this.authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXR1QGdtYWlsLmNvbSIsImV4cCI6MTY3NTY4MDgwNiwiaWF0IjoxNjc1Njc3MjA2fQ.onhTe25mk2btY7XLRJx6Qfrw-2JNmZT2Zwhc7XysjY0';
    this.authToken = localStorage.getItem('token');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    })
    let id = localStorage.getItem('userId');
    return this.http.get(`${this.urlGetUserById}/${id}`, { headers:new HttpHeaders().append('Authorization', `Bearer ${this.authToken}`)});
  }

}
