import { Component, OnInit, resolveForwardRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/model/Credentials';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector:  'app-login' ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  user_form : FormGroup;
  credentials = new Credentials()
  msg="";
  code=''
  number=''
  flag:boolean=false;

  constructor(public fb: FormBuilder, private loginService : LoginServiceService, private router:Router){
    this.user_form = this.fb.group({
      email: [this.credentials.userName, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: [this.credentials.password, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    });
  }
  
  ngOnInit(): void {
    console.log("hi");
  }

  HelloWorld() {
      this.flag = false;
    };



  onLogin(){     
      if((this.credentials.userName != null && this.credentials.userName != null) &&
        (this.credentials.password !='' && this.credentials.userName != '')){
          this.loginService.generateToken(this.credentials).subscribe(
            (response:any) => {
              console.log(response);
              console.log(response.token);
              console.log(response.userType);
              this.loginService.loginUser(response.token, response.userType, response.idInteger);
              console.log(response.userType);
              if(response.userType === 'admin' || response.userType === 'Admin')
              this.router.navigate(['adminDashboard']);
              if(response.userType === 'student' || response.userType === 'Student' )
              this.router.navigate(['studentDashboard']);
            },
            error => {
              this.flag=true;
              console.log("Inside Error");
              console.log(error);
              let a: number;
              a = window.setTimeout(this.HelloWorld, 2000);
            }
          );
        }else{
          this.flag=true;
          console.log("invalid credentials " + this.credentials);
        }
  }


}
