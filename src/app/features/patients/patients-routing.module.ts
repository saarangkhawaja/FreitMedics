import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { Roles } from 'src/app/shared/constants/roles.enum';
import { EncounterNotesComponent } from './patient-profile/encounter-note/encounter-note.component';


const routes: Routes = [
  {
    path: "",
    component: PatientsListComponent
  },
  {
    path: "new",
    component: NewPatientComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [Roles.ADMIN, Roles.MANAGER, Roles.DOCTOR, Roles.STAFF, Roles.RECEPTIONIST],
        redirectTo: 'home/patients'
      }
    }
  },
  {
    path: "person/:patientId",
    component: PatientProfileComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [Roles.ADMIN, Roles.MANAGER, Roles.DOCTOR, Roles.RECEPTIONIST],
        redirectTo: 'home/patients'
      }
    }
  },
  {
    path: "person/:patientId/encounter-note/:encounterId",
    component: EncounterNotesComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [Roles.ADMIN, Roles.MANAGER, Roles.DOCTOR],
        redirectTo: 'home/patients'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
