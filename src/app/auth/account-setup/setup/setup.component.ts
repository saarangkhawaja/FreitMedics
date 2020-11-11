import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { User } from 'src/app/models/user/user.model';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Signup } from 'src/app/models/signup/signup.model';
import { FacilityLocation } from 'src/app/models/settings/facility-location.model';
import { UtilityModel } from 'src/app/models/utility/utility.model';

const MOCK_DATA = {
  "user": {
    "email": "@gm.com",
    "password": "54321",
    "fullName": "Hafiz Muhammad Zubair Hasan",
    "phoneNumber": "22345900",
    "phoneCode": "+971",
    "userRoles": ["ADMIN", "DOCTOR"]
  },
  "facility": {
    "name": "AKUH",
    "phoneNumber": "22345900",
    "phoneCode": "+971",
    "email": "abc@xyz.com"
  },
  "facilityLocation": {
    "name": "AKUH",
    "phoneNumber": "22345900",
    "phoneCode": "+971",
    "email": "abcde@xyz.com",
    "address": "Somewhere",
    "description": "Anywhere",
    "facilityType": "HOSPITAL",
    "city": { "id": 1 }
  }
}
@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  StepOne: boolean = false;
  StepTwo: boolean = false;
  StepThree: boolean = false;
  StepFour: boolean = false;
  final: boolean = false;

  //Form Groups
  facility: FormGroup;
  facilityLocation: FormGroup;
  user: Signup
  selectedModuleId: number;

  //List of Countries & Cities to be populated in ngOnInit
  cities: string[];
  countries: string[];
  modules: UtilityModel[];
  createAcc_Submitted: boolean;
  finalize_Submitted: boolean;

  //Cellphone number Plugin Configurations
  preferredCountries: CountryISO[] = [CountryISO.UnitedArabEmirates];
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  separateDialCode = true;
  RoleSelection: boolean;
  loader: boolean;
  failure: boolean;
  failureMessage: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {

    //Facility Step Validations
    this.facility = this.formBuilder.group({

      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")]],
      phoneCode: ['+971'],
      email: ['', [Validators.required, Validators.email]],
    });

    //Facility Location Step Validations
    this.facilityLocation = this.formBuilder.group({

      description: ['', Validators.required],
      facilityType: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$")]],
      phoneCode: ['+971'],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      name: ['', Validators.required],
      license: ['', Validators.required]

    })

    //Getting Data from previous route i.e Organization SignUp
    if (history.state.user) {
      this.user = history.state.user;
    }

    this.StepOne = true;
  }

  get f() { return this.facility.controls }
  get g() { return this.facilityLocation.controls }


  createAccount() {
    this.createAcc_Submitted = true;
    if (this.facility.invalid) {
      return
    }
    this.StepOne = false;
    this.StepTwo = true;

  }

  parsePhoneNumber(telInstance, facilityLocation: any) {
    facilityLocation.phoneCode = telInstance.dialCode;
    facilityLocation.phoneNumber = telInstance.number
    facilityLocation.phoneNumber = facilityLocation.phoneNumber.replace(/\s/g, '')
    return facilityLocation;
  }

  finalize() {

    this.finalize_Submitted = true;
    this.loader = true;
    this.failure = false;

    let facilityLocationObj: FacilityLocation = new FacilityLocation();
    let facility: any = this.facility.value;
    // = this.parsePhoneNumber(this.facility.value.phoneCode,this.facility.value);
    facilityLocationObj.description = this.facilityLocation.value.description
    facilityLocationObj.phoneCode = this.facilityLocation.value.phoneCode
    facilityLocationObj.phoneNumber = this.facilityLocation.value.phoneNumber
    facilityLocationObj.address = this.facilityLocation.value.address
    facilityLocationObj.email = this.facilityLocation.value.email
    facilityLocationObj.name = this.facilityLocation.value.name
    facilityLocationObj.license = this.facilityLocation.value.license
    facilityLocationObj.facilityType = this.facilityLocation.value.facilityType
    facilityLocationObj.city.id = parseInt(this.facilityLocation.value.city)

    let adminSetup: any;
    adminSetup = {
      facilityLocation: facilityLocationObj,
      facility: facility,
      profile: this.user,
      modules: [this.selectedModuleId]
    }

    this.router.navigateByUrl('/auth/otp', {
      state: {
        email: this.user.user.email,
        password: this.user.user.password,
        status: 1
      }
    });
  }

  onModuleSelect(event: number) {
    this.selectedModuleId = event;
  }

}
