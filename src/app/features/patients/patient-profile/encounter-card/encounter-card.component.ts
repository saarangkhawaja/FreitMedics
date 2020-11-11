import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Listing } from 'src/app/models/listing/listing.model';
import { PatientList } from 'src/app/models/patient/patient-list.model';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { FacilityLocation } from 'src/app/models/settings/facility-location.model';
import { Router } from '@angular/router';
import { EncounterStates } from 'src/app/shared/constants/encounterStates.enum';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-encounter-card',
  templateUrl: './encounter-card.component.html',
  styleUrls: ['./encounter-card.component.css'],
  providers: [DatePipe]
})
export class EncounterCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
