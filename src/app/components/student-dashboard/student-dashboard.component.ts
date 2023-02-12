import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { CohortService } from 'src/app/service/cohort.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  userDetails = new User();
  viewBatchData: boolean = false;
  editProfileData: boolean = false;
  viewCourseData: boolean = false;
  addFeedbackData: boolean = false;
  noOfStudents:number = 0;
  noOfInstructors:number = 0
  noOfCohorts!:number;
  noOfCourses!:number;
  usersStudent:any=[];
  usersInstructor:any=[];
  cohortList:any=[];
  courseList:any=[];
  constructor(private loginService : LoginServiceService, private userService: UserService, 
    private router : Router, private cohortService: CohortService){ 
    this.loginService.getUserDetailsAfterLogin().subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.userType);
        this.userDetails = response;
        localStorage.setItem('cohortId', this.userDetails.cohortId);
      },
      error => {
        console.log("Inside Error");
        console.log(error);
      }
    );
    
    this.userService.getUserList('student').subscribe((data) => {
      this.usersStudent = data;
      console.log(data);
      if(this.usersStudent!=null) this.noOfStudents = this.usersStudent.length;
    })

    this.userService.getUserList('instructor').subscribe((data) => {
      this.usersInstructor = data;
      console.log(this.usersInstructor);
      if(this.usersInstructor!=null) this.noOfInstructors = this.usersInstructor.length;
    })
    this.cohortService.getCohorts().subscribe((data) => {
      this.cohortList = data;
      console.log(this.cohortList);
      if(this.cohortList!=null) this.noOfCohorts = this.cohortList.length;
    })
    this.cohortService.getCourses().subscribe((data) => {
      this.courseList = data;
      console.log(this.courseList);
      if(this.cohortList!=null) this.noOfCourses = this.courseList.length;
    })
  this.loginService.getUserDetailsAfterLogin().subscribe(
    (response: any) => {
      console.log(response);
      console.log(response.userType);
      this.userDetails.firstName = response.firstName;
      localStorage.setItem('id', response.userId);
    },
    error => {
      console.log("Inside Error");
      console.log(error);
    }
  );
}
  logout(){
    this.loginService.getLogout();
    this.router.navigate(['login']);
  }
  toggleWrapper() {
    console.log('inside toggle wrapper');
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");
    el?.classList.toggle("toggled");
  }
  editUser(input: string) {
    console.log("edit user fired");
    this.viewCourseData  = false;
    this.addFeedbackData = false;
    this.editProfileData = false;
    this.viewBatchData = false;
    if (input === 'viewBatch') {
      this.viewBatchData = true;
    } else if (input === 'addFeedback') {
      this.addFeedbackData = true;
    } else if (input === 'editProfile') {
      this.editProfileData = true;
    }else if(input === 'viewCourse'){
      this.viewCourseData = true;
    }
  }
  showEdit(id: number, userType: String) {
    this.router.navigate([`edit-profile/${userType}/${id}`]);
  }
}
