import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {

  constructor(private route: ActivatedRoute, private router : Router){
    this.router.navigate(['adminDashboard/view-user']);
  }
  showEdit(){
    this.router.navigate(['adminDashboard/edit-user', 1]);
  }
  showView(){
    this.router.navigate(['adminDashboard/view-user']);
  }

}
