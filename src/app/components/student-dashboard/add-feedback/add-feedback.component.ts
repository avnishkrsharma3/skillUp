import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/model/Feedback';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent {
  feedback: Feedback = new Feedback();
  studentId:any;
  @Input() 
  item!:number;
  constructor(private feedbackService: UserService, private loginService:LoginServiceService ,private router: Router) {
    console.log('inside constructor');
    console.log(this.item);
    if(loginService.getId()!=-1) this.feedback.studentId = loginService.getId();
    console.log(loginService.getId());
  }

  saveFeedback() {
    this.feedbackService.addFeedback(this.feedback).subscribe(data => {
      this.goToFeedbackList();
    })
  }

  goToFeedbackList() {
    console.log("inside feedback list after save feedback");
    alert("Feedback added successfully!!!!!");
    window.location.reload();
  }

  onSubmit() {
    console.log(this.feedback);
    this.saveFeedback();
  }

  onCancel() {
    this.feedback.feedbackText = '';
    // window.location.reload();
    this.router.navigate(['studentDashboard']);
  }
}
