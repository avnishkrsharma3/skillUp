import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  msg='Invalid Details';
  flag = false;
  constructor(private formBuilder: FormBuilder, private registerService : RegisterService, private router : Router) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      userType: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.registerService.registerUser(this.registerForm.value).subscribe(
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
    console.log(this.registerForm.value);
  }

  get firstName(){
    return this.registerForm.get('firstName');
  }
  get lastName(){
    return this.registerForm.get('lastName');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get userType(){
    return this.registerForm.get('userType');
  }

  

}
