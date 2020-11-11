import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  StepOne: boolean = false;
  StepTwo: boolean = false;
  StepThree: boolean = false;
  StepFour: boolean = false;
  final: boolean = false;
  loginForm: FormGroup;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.UnitedArabEmirates];
  submitted: boolean = false;
  failure: boolean;
  failureMessage: string;
  notVerified: boolean = false;
  currentUserRole: string;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.StepOne = true;
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });

  }




  login() {
    this.router.navigateByUrl("/home/patients");
  }

  forgotPassword() {
    this.router.navigateByUrl("/auth/forgot")
  }

  verifyUser() {
    this.router.navigateByUrl('/auth/otp', {
      state: {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        status: 1
      }
    })
  }

  get f() { return this.loginForm.controls; }

}
