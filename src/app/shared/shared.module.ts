import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ToastsContainerComponent } from './toasts-container/toasts-container.component';
import { NgbToastModule, NgbTooltipModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguagesStringPipe } from './pipes/languages-string.pipe';
import { AgeConverterPipe } from './pipes/age-converter/age-converter.pipe';
import { TwoDigitDecimalNumberDirective } from './directives/two-digit-decimal-number/two-digit-decimal-number.directive';
import { FilterComponent } from './filter/filter.component';
import { PasswordModalComponent } from './header-navigation/password-modal/password-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TextEditorComponent,
    ToastsContainerComponent,
    LanguagesStringPipe,
    AgeConverterPipe,
    TwoDigitDecimalNumberDirective,
    FilterComponent,
    PasswordModalComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    NgbToastModule,
    NgbTooltipModule,
    NgbPopoverModule
  ],
  exports: [
    TextEditorComponent,
    ToastsContainerComponent,
    LanguagesStringPipe,
    AgeConverterPipe,
    TwoDigitDecimalNumberDirective,
    FilterComponent
  ]
})
export class SharedModule { }
