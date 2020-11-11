import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    SharedModule,
    NgxPermissionsModule.forChild()
  ]
})
export class FeaturesModule {
  constructor(
  ) {

  }
}
