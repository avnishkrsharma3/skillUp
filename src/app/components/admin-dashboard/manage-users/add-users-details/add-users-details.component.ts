import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-add-users-details',
  templateUrl: './add-users-details.component.html',
  styleUrls: ['./add-users-details.component.css']
})
export class AddUsersDetailsComponent {

  id!: number;
  user: User = new User();
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router
    ,private registerService : RegisterService) {
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
  onSubmitInsert(user : User){
    console.log('before insertion for add user details');
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(
      (response:any) => {
        console.log(response);
        alert('Registration Successful')
        // this.router.navigate(['/login']);
        this.onCancel();
      },
      error => {
        console.log("Inside Error");
        console.log(error.error.message);
      }
    );
  }

  gotoUserList() {
    this.router.navigate(['/adminDashboard']);
  }

  onCancel() {
    this.gotoUserList();
  }
}
