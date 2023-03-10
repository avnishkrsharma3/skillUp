import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
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
      // window.location.reload();
      this.gotoUserList(this.user.userType);
    })
  }

  gotoUserList(userType: string) {
    if (userType === 'admin') {

      this.router.navigate([`${userType}Dashboard/view-user`]);
    }
    else {
      this.router.navigate([`${userType}Dashboard`]);
    }
  }

  onCancel() {
    this.gotoUserList(this.user.userType);
  }
}
