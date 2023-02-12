import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminDashboardViewfeedbackComponent } from './components/admin-dashboard/view-feedback-admin/admin-dashboard-viewfeedback.component';
import { ViewUsersDetailsComponent } from './components/admin-dashboard/manage-users/view-users-details/view-users-details.component';
import { UpdateUsersDetailsComponent } from './components/admin-dashboard/manage-users/update-users-details/update-users-details.component';
import { ManageUsersComponent } from './components/admin-dashboard/manage-users/manage-users.component';
import { ViewCoursesComponent } from './components/admin-dashboard/view-courses/view-courses.component';
import { AddFeedbackComponent } from './components/student-dashboard/add-feedback/add-feedback.component';
import { ManageCohortComponent } from './components/admin-dashboard/manage-cohort/manage-cohort.component';
import { ViewCohortComponent } from './components/admin-dashboard/manage-cohort/view-cohort/view-cohort.component';
import { UpdateCohortComponent } from './components/admin-dashboard/manage-cohort/update-cohort/update-cohort.component';
import { AddCohortComponent } from './components/admin-dashboard/manage-cohort/add-cohort/add-cohort.component';
import { AddUsersDetailsComponent } from './components/admin-dashboard/manage-users/add-users-details/add-users-details.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ViewSelelectedCohortsComponent } from './components/student-dashboard/view-selelected-cohorts/view-selelected-cohorts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    NavbarComponent,
    AdminDashboardViewfeedbackComponent,
    ViewUsersDetailsComponent,
    UpdateUsersDetailsComponent,
    ManageUsersComponent,
    ViewCoursesComponent,
    AddFeedbackComponent,
    ManageCohortComponent,
    ViewCohortComponent,
    UpdateCohortComponent,
    AddCohortComponent,
    AddUsersDetailsComponent,
    EditProfileComponent,
    ViewSelelectedCohortsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
