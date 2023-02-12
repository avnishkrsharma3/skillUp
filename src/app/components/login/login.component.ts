import { Component, OnInit, resolveForwardRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/model/Credentials';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user_form: FormGroup;
  msg = "";
  code = ''
  number = ''
  flag: boolean = false;

  constructor(public fb: FormBuilder, private loginService: LoginServiceService, private router: Router) {
    this.user_form = this.fb.group({
      userName: ['', [Validators.required, Validators.email, Validators.minLength(4), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
  }

  HelloWorld() {
    this.flag = false;
  };

  get userName() {
    return this.user_form.get('userName');
  }
  get password() {
    return this.user_form.get('password');
  }

  onLogin() {
    console.log(this.user_form.value);
    this.loginService.generateToken(this.user_form.value).subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.token);
        console.log(response.userType);
        this.loginService.loginUser(response.token, response.userType, response.idInteger);
        console.log(response.userType);
        if (response.userType === 'admin' || response.userType === 'Admin')
          this.router.navigate(['adminDashboard']);
        if (response.userType === 'student' || response.userType === 'Student')
          this.router.navigate(['studentDashboard']);
      },
      error => {
        this.flag = true;
        console.log("Inside Error");
        console.log(error);
        let a: number;
        a = window.setTimeout(this.HelloWorld, 2000);
      }
    );
  }


}
