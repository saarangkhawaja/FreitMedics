import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'patients',
    loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
  },
    {
    path: '',
    redirectTo: '/home/patients',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
