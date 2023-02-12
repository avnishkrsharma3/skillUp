import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-dashboard-viewfeedback',
  templateUrl: './admin-dashboard-viewfeedback.component.html',
  styleUrls: ['./admin-dashboard-viewfeedback.component.css']
})
export class AdminDashboardViewfeedbackComponent {
  feedbacks: any;
  constructor(private http: HttpClient, private feedbackService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllFeedbacks();
    console.log(this.feedbacks);
  }

  getAllFeedbacks() {
    this.feedbackService.getAllFeedbacks().subscribe(
      (response: any) => {
        this.feedbacks = response;
        console.log(this.feedbacks);
      },
      error => {
        console.log('error');
        console.log(error);
      }
    )
  }
}
