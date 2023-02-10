import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CohortService } from 'src/app/service/cohort.service';

@Component({
  selector: 'app-view-cohort',
  templateUrl: './view-cohort.component.html',
  styleUrls: ['./view-cohort.component.css']
})
export class ViewCohortComponent {
  cohorts: any;
  type:any;
  constructor(private http: HttpClient, private cohortService: CohortService, private router: Router) {
    this.type=localStorage.getItem('userType');
   }

  ngOnInit(): void {
    this.getAllCohorts();
    console.log(this.cohorts);
  }

  getAllCohorts() {
    this.cohortService.getCohorts().subscribe(data => {
      this.cohorts = data;
    })
  }

  updateCohort(id: number) {
    console.log('view cohort column clicked update cohort');
    this.router.navigate([`adminDashboard/edit-cohort/${id}`] );
  }

  deleteCohort(id: number) {
    this.cohortService.deleteCohort(id).subscribe(data => {
      this.ngOnInit();
    })
  }

}
