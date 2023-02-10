import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cohort } from 'src/app/model/Cohort';
import { CohortService } from 'src/app/service/cohort.service';

@Component({
  selector: 'app-update-cohort',
  templateUrl: './update-cohort.component.html',
  styleUrls: ['./update-cohort.component.css']
})
export class UpdateCohortComponent {
  id!: number;
  cohort: Cohort = new Cohort;
  constructor(private cohortService: CohortService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.cohortService.getCohortById(this.id).subscribe(data1 => {
      this.cohort = data1;
    });
  }

  onSubmit(cohort: Cohort) {
    this.cohortService.updateCohort(this.id, this.cohort).subscribe(data => {
      this.gotoCohortList();
    })
  }

  gotoCohortList() {
    this.router.navigate(['adminDashboard/view-cohort']);
  }

  onCancel() {
    this.gotoCohortList();
  }
}
