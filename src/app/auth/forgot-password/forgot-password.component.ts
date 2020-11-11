import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  submitted: boolean = false;
  loader: boolean = false;
  success: boolean;
  failure: boolean;

  successMessage: string = 'An email has been sent to your registered email';
  failureMessage: string;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    })
  }

  get control() { return this.forgotPasswordForm.controls; }


  sendEmail(): void {

    this.submitted = true;

    this.loader = true;
    this.failure = false;
    this.success = false;

    let email = this.forgotPasswordForm.value.email;


    this.success = true;
    this.loader = false;


  }

  login() {
    this.router.navigateByUrl("/auth/login");
  }

}
