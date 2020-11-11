import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Signup } from 'src/app/models/signup/signup.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loader: boolean = false;

  preferredCountries: CountryISO[] = [CountryISO.UnitedArabEmirates];
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  separateDialCode = true;
  submitted: boolean = false;
  failure: boolean;
  failureMessage: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastrService
  ) {
   }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")]],
      phoneCode: ["+971"],
      fullName: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],

    });
  }

  parsePhoneNumber(telInstance, user: User) {
    user.phoneCode = telInstance.dialCode;
    user.phoneNumber = telInstance.number
    user.phoneNumber = user.phoneNumber.replace(/\s/g, '')
    return user;
  }

  get f() { return this.signupForm.controls; }


  onSubmit() {
    this.router.navigateByUrl('/auth/otp', {
      state: {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        status: 1
      }
    });
  }

}
