import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cohort } from 'src/app/model/Cohort';
import { SendCohort, course } from 'src/app/model/SendCohort';
import { CohortService } from 'src/app/service/cohort.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-cohort',
  templateUrl: './update-cohort.component.html',
  styleUrls: ['./update-cohort.component.css']
})
export class UpdateCohortComponent {
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
  constructor(private cohortService: CohortService, private userService: UserService, private router: Router, private route:
    ActivatedRoute) {
    this.cohort.cohortId = this.route.snapshot.params['id'];

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
    this.cohortService.getCohortById(this.cohort.cohortId).subscribe(data => {
      console.log(data);
      this.cohort = data;
      console.log('')
    }
    )
  }

  saveCohort() {
    console.log(this.cohort);
    console.log(this.courseId);
    console.log(this.users);
    console.log(this.cohort);
    this.sendCohort.startDate = this.cohort.startDate;
    this.sendCohort.endDate = this.cohort.endDate;
    this.sendCohort.duration = this.cohort.duration;
    this.sendCohort.instructorId = this.userId
    let crs = new course();
    crs.courseId = this.courseId;
    this.sendCohort.course = crs;
    console.log(this.sendCohort);
    this.cohortService.updateCohort(this.cohort.cohortId,this.sendCohort).subscribe((data) =>{
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
