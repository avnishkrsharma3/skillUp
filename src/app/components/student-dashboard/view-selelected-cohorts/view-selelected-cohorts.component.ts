import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CohortService } from 'src/app/service/cohort.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-selelected-cohorts',
  templateUrl: './view-selelected-cohorts.component.html',
  styleUrls: ['./view-selelected-cohorts.component.css']
})
export class ViewSelelectedCohortsComponent {
  cohort: any;
  cohortId:any;
  flag:boolean = false;;
  constructor(private http: HttpClient, private cohortService: CohortService,
    private userService: UserService,
    private router: Router) {
        if(localStorage.getItem('cohortId')==='null'){
          this.flag = true;
        }else{
          this.cohortId = localStorage.getItem('cohortId');
          console.log('constructor caling view alloted cohort');
          console.log(this.cohortId);
        }
    }

  ngOnInit(): void {
    this.getAllCohorts();
    console.log(this.cohort);
  }

  getAllCohorts() {
    this.cohortService.getCohortById(this.cohortId).subscribe(data => {
      this.cohort = data;
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
