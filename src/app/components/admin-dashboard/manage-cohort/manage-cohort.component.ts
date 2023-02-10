import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-cohort',
  templateUrl: './manage-cohort.component.html',
  styleUrls: ['./manage-cohort.component.css']
})
export class ManageCohortComponent {
  constructor(private router:Router, private route:ActivatedRoute){
    this.router.navigate(['adminDashboard/view-cohort']);
  }
  showEdit(){
    this.router.navigate(['adminDashboard/edit-cohort', 1]);
  }
  showView(){
    this.router.navigate(['adminDashboard/view-cohort']);
  }
  showAdd(){
    this.router.navigate(['adminDashboard/add-cohort'])
  }
}
