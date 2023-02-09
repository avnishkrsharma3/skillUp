import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-users-details',
  templateUrl: './update-users-details.component.html',
  styleUrls: ['./update-users-details.component.css']
})
export class UpdateUsersDetailsComponent {

  id!: number;
  user: User = new User();
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.userService.getUserById(this.id).subscribe(data1 => {
      this.user = data1;
    });
  }

  onSubmit(user: User) {
    this.userService.updateUser(this.id, this.user).subscribe(data => {
      // window.location.reload();
      console.log('after insertion in to database')
      console.log(data);
      window.location.reload();
    })
  }

  gotoUserList() {
    this.router.navigate(['/adminDashboard']);
  }

  onCancel() {
    this.gotoUserList();
  }
}