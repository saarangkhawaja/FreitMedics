import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { MedicalHistoryComponent } from './patient-profile/medical-history/medical-history.component';
import { EncounterCardComponent } from './patient-profile/encounter-card/encounter-card.component';
import { StartEncounterComponent } from './start-encounter/start-encounter.component';
import { NgbModalModule, NgbCollapseModule, NgbTooltipModule, NgbNavModule, NgbPaginationModule, NgbDatepickerModule, NgbTypeaheadModule, NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryModalComponent } from './patient-profile/history-modal/history-modal.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddDependentModalComponent } from './add-dependent-modal/add-dependent-modal.component';
import { AddPatientModalComponent } from './add-patient-modal/add-patient-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AddDetailsModalComponent } from './add-details-modal/add-details-modal.component';
import { EncounterNotesComponent } from './patient-profile/encounter-note/encounter-note.component';
import { NgxPrintModule } from 'ngx-print';
import { AddCardImageModalComponent } from './patient-profile/add-card-image-modal/add-card-image-modal.component';
import { ShowImageModalComponent } from './patient-profile/show-image-modal/show-image-modal.component';
import { BasicProfileComponent } from './patient-profile/basic-profile/basic-profile.component';
import { VitalSignsComponent } from './patient-profile/vital-signs/vital-signs.component';
import { CardsComponent } from './patient-profile/cards/cards.component';
import { InsuranceDetailsComponent } from './patient-profile/insurance-details/insurance-details.component';


@NgModule({
  declarations: [PatientsListComponent, NewPatientComponent, PatientProfileComponent, MedicalHistoryComponent, EncounterCardComponent, StartEncounterComponent, HistoryModalComponent, AddDependentModalComponent, AddPatientModalComponent, AddDetailsModalComponent, EncounterNotesComponent, AddCardImageModalComponent, ShowImageModalComponent, BasicProfileComponent, VitalSignsComponent, CardsComponent, InsuranceDetailsComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    NgbModalModule,
    CKEditorModule,
    SharedModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    FormsModule,
    NgbTooltipModule,
    NgxIntlTelInputModule,
    CKEditorModule,
    NgxSpinnerModule,
    NgbNavModule,
    NgxPrintModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    NgbButtonsModule,
    NgxPermissionsModule.forChild()
  ],
  exports: [MedicalHistoryComponent, HistoryModalComponent]
})
export class PatientsModule { }
