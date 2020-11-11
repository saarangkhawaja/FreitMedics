import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.css']
})
export class PasswordModalComponent implements OnInit {

  currentLocationId: number;

  failure: boolean = false;
  message: string;
  submitted: boolean = false;
  passwordForm: FormGroup;
  result: { password: string, status: boolean } = { password: '', status: false };
  loader: boolean = false;

  subscriptions: Subscription = new Subscription();

  constructor(
    private modalService: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      password: ["", [Validators.required]]
    })
  }

  onSave() {
    this.result.status = true;
    this.result.password = this.passwordForm.value.password;
    this.closeModal();
  }


  closeModal() {
    this.modalService.close(this.result);
  }

  get passwordFormControl() {
    return this.passwordForm.controls
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
