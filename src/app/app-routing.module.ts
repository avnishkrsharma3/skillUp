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
        path: 'view',
        component: ViewUsersDetailsComponent
      },
      {
        
        path: 'edit/:id',
        component: UpdateUsersDetailsComponent
      }
    ]
  },
  { path: 'studentDashboard', component: StudentDashboardComponent, canActivate: [StudentGaurdGuard] },
  // { path: 'update-user/:id', component: UpdateUsersDetailsComponent, canActivate: [AdminGaurdGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
