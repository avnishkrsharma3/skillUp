import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-users-details',
  templateUrl: './view-users-details.component.html',
  styleUrls: ['./view-users-details.component.css']
})
export class ViewUsersDetailsComponent implements OnInit {
  
  users: any;
  // userType: string = "student";
  userType: any;
  constructor(private http: HttpClient, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUserList('student').subscribe((data) => {
      this.users = data;
      console.log(this.users);
    })
    console.log("inside ngOnIt running.......................")
  }

  onChange(role: string, isChecked: any) {
    
    if (isChecked) {
      this.userType = role;
      this.userService.getUserList(this.userType).subscribe((data) => {
        this.users = data;
        console.log(this.users);
      })
    } 
  }

  updateUser(id: number) {
    console.log(id);
    console.log("inside update user");
    console.log(this.route);
    this.router.navigate([`adminDashboard/edit-user/${id}`] );
  }
  addUser(id: number) {
    console.log(id);
    console.log("inside update user");
    console.log(this.route);
    this.router.navigate([`adminDashboard/add-user/${id}`] );
  }

  deleteUser(id: number) {
    // this.userService.deleteUser(id).subscribe(data => {
    //   this.userService.getUserList(this.userType);
    this.userService.deleteUser(id).subscribe(data => {
      this.ngOnInit();
      window.location.reload();
      // this.router.navigate(['users']);
    })
  }


}
