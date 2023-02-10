import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CohortService } from 'src/app/service/cohort.service';

@Component({
  selector: 'app-view-cohorts',
  templateUrl: './view-cohorts.component.html',
  styleUrls: ['./view-cohorts.component.css']
})
export class ViewCohortsComponent {
  cohorts: any;
  constructor(private http: HttpClient, private cohortService: CohortService, private router: Router) { }

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
    this.router.navigate(['update-cohort', id]);
  }

  deleteCohort(id: number) {
    this.cohortService.deleteCohort(id).subscribe(data => {
      this.ngOnInit();
    })
  }
}
