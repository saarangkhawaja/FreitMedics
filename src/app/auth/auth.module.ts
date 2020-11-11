import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SetupComponent } from './account-setup/setup/setup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OrganizationSignupComponent } from './organization-signup/organization-signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { LogoutComponent } from './logout/logout.component';
import { OtpComponent } from './otp/otp.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [LoginComponent, SignupComponent,SetupComponent, ForgotPasswordComponent, OrganizationSignupComponent, LogoutComponent, OtpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    NgxSpinnerModule,
    NgOtpInputModule
  ]
})
export class AuthModule { }
