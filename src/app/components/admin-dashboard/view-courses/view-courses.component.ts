import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CohortService } from 'src/app/service/cohort.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent {
  courses: any;
  constructor(private http: HttpClient, private courseService: CohortService, private router: Router) { }

  ngOnInit(): void {
    // this.userService.getUsers().subscribe((data) => {
    //   this.users = data;
    // })
    this.getAllCourses();
    console.log(this.courses);

  }

  getAllCourses() {
    console.log('get all course fired');
    this.courseService.getCourses().subscribe(data => 
      // (response:any) => {
      //   this.courses=response;
      //   console.log(this.courses)
      // },
      // (error) => {
      //   console.log('inside error');
      //   console.log(error.error.message);
      // }
      {this.courses = data}
    )
    console.log('exit');
  }
}
