import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { RegisterService } from 'src/app/service/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  ngOnInit(): void {
  }
  
  registerForm: FormGroup;
  user = new User();
  msg='Invalid Details';
  flag = false;
  constructor(private formBuilder: FormBuilder, private registerService : RegisterService, private router : Router) {
    this.registerForm = this.formBuilder.group({
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, Validators.minLength(6)]],
      userType: [this.user.userType]
    });
  }

  onSubmit() {
    this.registerService.registerUser(this.user).subscribe(
      (response:any) => {
        console.log(response);
        alert('Registration Successful')
        this.router.navigate(['/login']);
      },
      error => {
        this.flag = true;
        console.log("Inside Error");
        console.log(error.error.message);
        this.msg = error.error.message;
      }
    );
    console.log(this.user);
  }

  

}
