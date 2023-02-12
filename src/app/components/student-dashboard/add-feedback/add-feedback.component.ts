import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SendFeedback, UserId } from 'src/app/model/SendFeedback';
import { CohortService } from 'src/app/service/cohort.service';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent {
  feedback: SendFeedback = new SendFeedback();
  studentId: any;
  msg: string = '';
  isAlloted: boolean = true;
  isError = false;
  @Input()
  item!: number;
  constructor(private feedbackService: UserService,
    private loginService: LoginServiceService,
    private cohortService: CohortService,
    private router: Router) {
    console.log('inside add feedback constructor');
    if (localStorage.getItem('cohortId') === 'null') {
      this.isAlloted = false;
      console.log(this.isAlloted)
    }
    console.log('inside constructor');
    console.log(this.item);
    if (loginService.getId() != -1) {
      let userId = new UserId();
      userId.userId = loginService.getId();
      this.feedback.user = userId;
      console.log(loginService.getId());
    }
    // this.feedback.studentId = loginService.getId();
    console.log(loginService.getId());
  }

  saveFeedback() {
    console.log(this.feedback);
    this.feedbackService.addFeedback(this.feedback).subscribe(data => {
      console.log(data);
      this.goToFeedbackList();
    }
    )
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
