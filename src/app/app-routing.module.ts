import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminGaurdGuard } from './authGaurd/admin-gaurd.guard';
import { StudentGaurdGuard } from './authGaurd/student-gaurd.guard';
import { UpdateUsersDetailsComponent } from './components/admin-dashboard/manage-users/update-users-details/update-users-details.component';
import { ViewUsersDetailsComponent } from './components/admin-dashboard/manage-users/view-users-details/view-users-details.component';
import { ViewCohortComponent } from './components/admin-dashboard/manage-cohort/view-cohort/view-cohort.component';
import { UpdateCohortComponent } from './components/admin-dashboard/manage-cohort/update-cohort/update-cohort.component';
import { AddCohortComponent } from './components/admin-dashboard/manage-cohort/add-cohort/add-cohort.component';
import { AddUsersDetailsComponent } from './components/admin-dashboard/manage-users/add-users-details/add-users-details.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGaurdGuard],
    children: [
      {
        path: 'view-user',
        component: ViewUsersDetailsComponent
      },
      {
        path: 'edit-user/:id',
        component: UpdateUsersDetailsComponent
      },
      {
        path: 'add-user/:id',
        component: AddUsersDetailsComponent
      },
      {
        path: 'view-cohort',
        component: ViewCohortComponent
      },
      {
        path: 'edit-cohort/:id',
        component: UpdateCohortComponent
      },
      {
        path: 'add-cohort',
        component: AddCohortComponent
      }
    ]
  },
  { path: 'studentDashboard', component: StudentDashboardComponent, canActivate: [StudentGaurdGuard] },
  // { path: 'update-user/:id', component: UpdateUsersDetailsComponent, canActivate: [AdminGaurdGuard] }
  { path: 'edit-profile/:userType/:id', component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
