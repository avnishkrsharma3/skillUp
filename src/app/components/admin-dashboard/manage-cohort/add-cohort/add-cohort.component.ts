import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cohort } from 'src/app/model/Cohort';
import { Course } from 'src/app/model/Course';
import { CohortService } from 'src/app/service/cohort.service';

@Component({
  selector: 'app-add-cohort',
  templateUrl: './add-cohort.component.html',
  styleUrls: ['./add-cohort.component.css']
})
export class AddCohortComponent {
  cohort: Cohort = new Cohort();
  errorMessage!: string;
  courses:any;
  noOfCourses!:number;
  courseId:any=[];
  selectedId=1;
  constructor(private cohortService: CohortService, private router: Router) { 
    this.cohort.cohortId = 1;
  }

  ngOnInit(): void {
    console.log('')
    this.cohortService.getCourses().subscribe(data => 
      {
        console.log(data);
        this.courses = data;
        console.log(data.courseName)
      }
    )   
  }

  saveCohort() {
    this.cohortService.addCohort(this.cohort).subscribe(data => {
      this.gotoCohortList();
    },
      error => {
        if (error.status === 500) {
          this.errorMessage = "Cohort already exists.";
        }
        else {
          this.errorMessage = "An unexpected error occurred";
        }
      });
  }

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
