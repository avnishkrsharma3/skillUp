import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../model/Feedback';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  url: string;
  // authToken will be fetched from the localStorage once the user registers/logs in.
  authToken: any = '';
  headers: any;
  urlfeedback!: string
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8084/user/users';
    this.urlfeedback = 'http://localhost:8084/user/feedback';
    this.authToken = localStorage.getItem('token');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    })
  }

  getUserList(userType: string): Observable<User> {
    return this.http.get<User>(`${this.url}/type/${userType}`, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.authToken}`) });
  }

  addUser(user: User): Observable<Object> {
    return this.http.post(`${this.url}`, user, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.authToken}`) });
  }

  updateUser(id: number, user: User): Observable<Object> {
    console.log("inside update user user service");
    console.log(id);
    console.log(user);
    return this.http.put(`${this.url}/${id}`, user, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.authToken}`) });
  }

  deleteUser(id: number): Observable<Object> {
    return this.http.delete(`${this.url}/${id}`, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.authToken}`) })
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.authToken}`) });
  }

  // feedback services 
  // authToken will be fetched from the localStorage once the user registers/logs in.
  addFeedback(feedback: any): Observable<Object> {
    return this.http.post(`${this.urlfeedback}`, feedback, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.authToken}`) });
  }

  getAllFeedbacks(): Observable<Feedback> {
    console.log('getAllfeedback method in service')
    return this.http.get<Feedback>(`${this.urlfeedback}`, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.authToken}`) });
  }


}
