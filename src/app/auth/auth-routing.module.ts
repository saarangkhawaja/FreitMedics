import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SetupComponent } from './account-setup/setup/setup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OrganizationSignupComponent } from './organization-signup/organization-signup.component';
import { LogoutComponent } from './logout/logout.component';
import { OtpComponent } from './otp/otp.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'org-signup',
    component: OrganizationSignupComponent
  },
  {
    path: "setup",
    component: SetupComponent
  },
  {
    path: "otp",
    component: OtpComponent
  },
  {
    path: "forgot",
    component: ForgotPasswordComponent
  },
  {
    path: "logout",
    component: LogoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
