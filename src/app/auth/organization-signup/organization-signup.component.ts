import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { Signup } from 'src/app/models/signup/signup.model';

@Component({
  selector: 'app-organization-signup',
  templateUrl: './organization-signup.component.html',
  styleUrls: ['./organization-signup.component.css']
})
export class OrganizationSignupComponent implements OnInit {

  OrganizationSignUp: FormGroup;
  submitted: boolean;
  loader: boolean;
  failure: boolean;


  preferredCountries: CountryISO[] = [CountryISO.UnitedArabEmirates];
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  separateDialCode = true;
  RoleSelection: boolean;

  constructor(
    private router: Router,
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.OrganizationSignUp = this.FormBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")]],
      email: ["", [Validators.required, Validators.email]],
      fullName: ["", Validators.required],
      password: ["", Validators.required],
      phoneCode: ['+971'],
      admin: [false],
      doctor: [false],
    });
  }

  get f() { return this.OrganizationSignUp.controls }

  onSubmit() {

    this.submitted = true;
    this.RoleSelection = false;

    let adminRole = this.OrganizationSignUp.value.admin;
    let doctorRole = this.OrganizationSignUp.value.doctor;

    if (this.OrganizationSignUp.invalid) {
      return
    }
    else if (adminRole == "" && doctorRole == "") {
      this.RoleSelection = true;
      return
    }

    let user: Signup = new Signup();
    user.user.fullName = this.OrganizationSignUp.value.fullName;
    user.user.password = this.OrganizationSignUp.value.password
    user.user.email = this.OrganizationSignUp.value.email;
    user.user.phoneCode = this.OrganizationSignUp.value.phoneCode
    user.user.phoneNumber = this.OrganizationSignUp.value.phoneNumber


    if (adminRole && doctorRole) {
      user.userRoles = ["ADMIN", "DOCTOR"];
    } else if (adminRole) {
      user.userRoles = ["ADMIN"];
    } else {
      user.userRoles = ["DOCTOR"];
    }
    this.router.navigateByUrl('/auth/setup', { state: { user } });
  }

  parsePhoneNumber(telInstance: any, user: User) {
    user.phoneCode = telInstance.dialCode;
    user.phoneNumber = telInstance.number
    user.phoneNumber = user.phoneNumber.replace(/\s/g, '')
    return user;
  }

}
