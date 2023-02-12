import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CohortService } from 'src/app/service/cohort.service';


@Component({
  selector: 'app-update-users-details',
  templateUrl: './update-users-details.component.html',
  styleUrls: ['./update-users-details.component.css']
})
export class UpdateUsersDetailsComponent {

  id!: number;
  user: User = new User();
  cohorts:any;
  constructor(private userService: UserService, private route: ActivatedRoute,
    private cohortService: CohortService ,
    private router: Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.userService.getUserById(this.id).subscribe(data1 => {
      this.user = data1;
    });
    this.cohortService.getCohorts().subscribe(data => 
      {
        this.cohorts = data;
      }
    );
  }

  onSubmit(user: User) {
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      // window.location.reload();
      console.log('after insertion in to database')
      console.log(data);
    //  window.location.reload();
      this.gotoUserList();
    })
  }
  onSubmitInsert(user : User){
    this.userService.addUser(this.user).subscribe(data => {
      // window.location.reload();
      alert('Update Successful')
        // this.router.navigate(['/login']);
        this.onCancel();
    })
  }

  gotoUserList() {
    this.router.navigate(['/adminDashboard/view-user']);
  }

  onCancel() {
    this.gotoUserList();
  }
}