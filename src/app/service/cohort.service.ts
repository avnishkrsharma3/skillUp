import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cohort } from '../model/Cohort';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CohortService {
  url: string;
  // authToken will be fetched from the localStorage once the user registers/logs in.
  authToken: any = '';
  headers: any;
  cohort: any;
  urlcourse:any;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8082/cohort/';
    this.urlcourse = 'http://localhost:8082/cohort/course'
    this.authToken = localStorage.getItem('token');
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    })
  }

  getCohorts(): Observable<Cohort> {
    console.log('inside getCohorts in cohort service')
    return this.http.get<Cohort>(`${this.url}`, { headers: this.headers, responseType: 'json' });
  }

  addCohort(cohort: Cohort): Observable<Object> {
    return this.http.post(`${this.url}`, cohort, { headers: this.headers });
  }

  updateCohort(id: number, cohort: Cohort): Observable<Object> {
    return this.http.put(`${this.url}${id}`, cohort, { headers: this.headers });
  }

  deleteCohort(id: number): Observable<Object> {
    return this.http.delete(`${this.url}${id}`, { headers: this.headers })
  }

  getCohortById(id: number): Observable<Cohort> {
    return this.http.get<Cohort>(`${this.url}${id}`, { headers: this.headers });
  }
  // get courses
  getCourses() {
    console.log('inside get courses in cohort service')
    console.log(this.urlcourse);
    return this.http.get<Course>(`${this.urlcourse}`, { headers: this.headers });
  }
}