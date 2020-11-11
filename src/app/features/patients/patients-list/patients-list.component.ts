import { Component, OnInit, OnDestroy } from '@angular/core';
import { AddDependentModalComponent } from '../add-dependent-modal/add-dependent-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPatientModalComponent } from '../add-patient-modal/add-patient-modal.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Listing } from 'src/app/models/listing/listing.model';
import { NgxPermissionsService } from 'ngx-permissions';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AddDetailsModalComponent } from '../add-details-modal/add-details-modal.component';
import { PatientList } from 'src/app/models/patient/patient-list.model';
import { FacilityLocation } from 'src/app/models/settings/facility-location.model';
import { User } from 'src/app/models/user/user.model';
import { Pagination } from 'src/app/models/utility/pagination.model';
import { Location } from '@angular/common';
import { Roles } from 'src/app/shared/constants/roles.enum';
import { Patient } from 'src/app/models/patient/patient.model';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent implements OnInit, OnDestroy {
  searchPatient: FormGroup;

  Patients: PatientList[] = [];
  mrnPrefix: string = 'MRN';
  noData: boolean;
  failure: boolean;
  failureMessage: any;
  submitted: boolean;
  location: boolean;
  facilityId: number;
  permissions;

  currentUser: User;
  currentFacilityId: number;
  currentLocation: FacilityLocation;
  currentUserRole: string;

  ageDaysFlag: boolean = false;

  pagination: Pagination = new Pagination(1, 10);

  subscriptions: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal,
    private perm: NgxPermissionsService,
    private _location: Location
  ) {
    this.Patients = [
      new PatientList('21', 'ben.dover@gmail.com', 'MALE', 1, 1,
        'Ben Dover', '+971', '585552460', 'COMPLETE', '296-1979-9631849-1', 'OWNER'),
      new PatientList('24', 'ben.dover@gmail.com', 'MALE', 1, 1,
        'Ben Dover', '+971', '585552461', 'COMPLETE', '296-1979-9631849-2', 'DEPENDANT'),
      new PatientList('26', 'ben.dover@gmail.com', 'MALE', 1, 1,
        'Ben Dover', '+971', '585552462', 'COMPLETE', '296-1979-9631849-3', 'OWNER'),
      new PatientList('28', 'ben.dover@gmail.com', 'MALE', 1, 1,
        'Ben Dover', '+971', '585552463', 'COMPLETE', '296-1979-9631849-4', 'DEPENDANT'),
      new PatientList('30', 'ben.dover@gmail.com', 'MALE', 1, 1,
        'Ben Dover', '+971', '585552464', 'COMPLETE', '296-1979-9631849-5', 'DEPENDANT'),
      new PatientList('32', 'ben.dover@gmail.com', 'MALE', 1, 1,
        'Ben Dover', '+971', '585552465', 'COMPLETE', '296-1979-9631849-6', 'OWNER'),
    ]
  }

  ngOnInit(): void {
    try {
      this.permissions = this.perm.getPermissions();

      // Init Search Validations
      this.searchPatient = this.formBuilder.group({
        query: [''],
        filter: ['patientNameOrMrn', Validators.required],
      });
    } catch (err) { }
  }

  getPatients() {
    if (this.permissions[Roles.DOCTOR] && !this.permissions[Roles.ADMIN]) {
      this.getPatientsByDoctor();
    } else {
      this.getPatientsByAdmin();
    }
  }

  getPatientsByAdmin() {
  }

  getPatientsByDoctor() {
  }

  get f() {
    return this.searchPatient.controls;
  }

  addDependant(patientId: any) {
    const modalRef = this.modalService.open(AddDependentModalComponent);
    modalRef.componentInstance.patientId = patientId;
    modalRef.result
      .then((result) => {
        if (result) {
          this.spinner.show();
          //GET ALL PATIENTS
          this.getPatients();
        }
      })
      .catch(() => { });
  }

  SearchQuery() {
  }

  startEncounter(patientId) {
  }

  PatientDetailsNavigate(patientId) {
    this._location.go(this._location.path());
    this.router.navigateByUrl('home/patients/person/' + patientId, { skipLocationChange: true });
  }

  openAddPatientModal() {
    const modalRef = this.modalService.open(AddPatientModalComponent, { size: 'lg', backdrop: 'static' });
    modalRef.result
      .then((result) => {
        if (result) {
          this.spinner.show();

          //GET ALL PATIENTS
          this.getPatients();
        }
      })
      .catch(() => { });
  }

  getAge(dateOfBirth: Date) {
    var ageDifMs = Date.now() - dateOfBirth.getTime();
    var ageDate = new Date(ageDifMs);
    if (Math.abs(ageDate.getUTCFullYear() - 1970) == 0) {
      this.ageDaysFlag = true;
      return Math.round(Math.abs(+dateOfBirth - +new Date()) / 8.64e7);
    }
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  dateOfBirthToAge(patientList: PatientList[]) {
    patientList.forEach((element) => {
      if (element.patient.dateOfBirth != null) {
        element.patient.age = this.getAge(
          new Date(element.patient.dateOfBirth)
        );
        if (this.ageDaysFlag) {
          element.patient.dateOfBirth = element.patient.age
            .toLocaleString()
            .concat('d');
          this.ageDaysFlag = false;
        } else {
          element.patient.dateOfBirth = element.patient.age
            .toLocaleString()
            .concat('y');
        }
      }
    });
    return patientList;
  }

  addDetails(patient: PatientList) {
    const modalRef = this.modalService.open(AddDetailsModalComponent);
    modalRef.componentInstance.patientType = patient.patient.type;
    modalRef.componentInstance.patientId = patient.patient.id;
    modalRef.result
      .then((result) => {
        if (result) {
          this.spinner.show();

          //GET ALL PATIENTS
          this.getPatients();
        }
      })
      .catch(() => { });
  }

  onPageChange(pageNumber: number) {
    this.pagination.pageNumber = pageNumber;
    this.getPatients();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
