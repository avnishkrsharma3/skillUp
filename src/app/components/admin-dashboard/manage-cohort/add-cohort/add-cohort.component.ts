import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cohort } from 'src/app/model/Cohort';
import { Course } from 'src/app/model/Course';
import { course, SendCohort } from 'src/app/model/SendCohort';
import { User } from 'src/app/model/User';
import { CohortService } from 'src/app/service/cohort.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-cohort',
  templateUrl: './add-cohort.component.html',
  styleUrls: ['./add-cohort.component.css']
})
export class AddCohortComponent {
  cohort=new Cohort();
  sendCohort = new SendCohort();
  errorMessage!: string;
  courses: any; // list of courses
  noOfCourses!: number;
  courseId!: number;
  userId!: number;
  selectedId = 1; // selected id of instructor
  users: any//list of users
  selectControl!: number;
  constructor(private cohortService: CohortService, private userService: UserService, private router: Router) {
    this.cohort.cohortId = 100;
  }

  ngOnInit(): void {
    console.log('')
    this.cohortService.getCourses().subscribe(data => {
      console.log(data);
      this.courses = data;
      console.log(data.courseName)
    }
    )
    this.userService.getUserList('instructor').subscribe((data) => {
      this.users = data;
      console.log(this.users);
    })
  }

  saveCohort() {
    console.log(this.cohort);
    console.log(this.courseId);
    console.log(this.users);
    console.log(this.cohort);
    this.sendCohort.cohortId = this.cohort.cohortId;
    this.sendCohort.startDate = this.cohort.startDate;
    this.sendCohort.endDate = this.cohort.endDate;
    this.sendCohort.duration = this.cohort.duration;
    this.sendCohort.instructorId = this.userId
    let crs = new course();
    crs.courseId = this.courseId;
    this.sendCohort.course = crs;
    console.log(this.sendCohort);
    this.cohortService.addCohort(this.sendCohort).subscribe((data) =>{
      this.gotoCohortList();
    }      
    );
  };




  gotoCohortList() {
    console.log("inside cohort list");
    alert('cohort added Successfully!!!!!!')
    this.router.navigate(['adminDashboard/view-cohort']);
  }

  onSubmit() {
    console.log("inside on submit");
    this.saveCohort();
  }

  onCancel() {
    console.log('on cancel cohort update');
    this.router.navigate(["adminDashboard/view-cohort"]);
  }
}
