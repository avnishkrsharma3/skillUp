import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { CohortService } from 'src/app/service/cohort.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  manageUsersData: boolean = false;
  manageBatchData: boolean = false;
  batchMappingData: boolean = false;
  viewCourseData: boolean = false;
  viewFeedbackData: boolean = false;
  userDetails = new User();
  noOfStudents:number = 0;
  noOfInstructors:number = 0
  noOfCohorts!:number;
  noOfCourses!:number;
  usersStudent:any=[];
  usersInstructor:any=[];
  cohortList:any=[];
  courseList:any=[];
  constructor(private loginService: LoginServiceService, private router: Router, private userService : UserService,
    private cohortService:CohortService) {}
  ngOnInit(): void {
    this.loginService.getUserDetailsAfterLogin().subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.userType);
        this.userDetails = response;
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
  }
  
  toggleWrapper() {
    console.log('inside toggle wrapper');
    var el = document.getElementById("wrapper");
    var toggleButton = document.getElementById("menu-toggle");
    el?.classList.toggle("toggled");
    // toggleButton.onclick = function () {
    // };
  }

  logout() {
    console.log('inside logout');
    this.loginService.getLogout();
  }

  editUser(input: string) {
    console.log("edit user fired");
    this.manageUsersData = false;
    this.manageBatchData = false;
    this.batchMappingData = false;
    this.viewCourseData = false;
    this.viewFeedbackData = false;
    if (input === 'edituser') {
      console.log('inside if condidtion of edit user');
      this.manageUsersData = true;
    } else if (input === 'managebatch') {
      this.manageBatchData = true;
    } else if (input === 'viewfeedback') {
      this.viewFeedbackData = true;
    } else if (input === 'batchmapping') {
      this.batchMappingData = true;
    }else if(input === 'viewCourse'){
      this.viewCourseData = true;
    }
  }

}
