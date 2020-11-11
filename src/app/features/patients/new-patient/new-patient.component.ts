import { Component, OnInit } from '@angular/core';
import { CountryISO, SearchCountryField, TooltipLabel } from 'ngx-intl-tel-input';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FacilityLocation } from 'src/app/models/settings/facility-location.model';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

}
