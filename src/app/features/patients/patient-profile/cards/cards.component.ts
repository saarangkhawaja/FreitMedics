import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrService } from 'ngx-toastr';
import { AddCardImageModalComponent } from '../add-card-image-modal/add-card-image-modal.component';
import { CardType } from 'src/app/shared/constants/card-type.enum';
import { ShowImageModalComponent } from '../show-image-modal/show-image-modal.component';
import { PatientBasicProfileModel } from 'src/app/models/patient/patient-basic-profile.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() profilePatient: PatientBasicProfileModel;

  constructor(
    private modalService: NgbModal,
    // private toastService: ToastrService,
  ) { }

  ngOnInit(): void { }

  uploadNationalityCardImage(profilePatient: any) {
    const modalRef = this.modalService.open(AddCardImageModalComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.patientId = profilePatient.id;
    modalRef.componentInstance.uploadType = CardType.NATIONALITY_CARD;
    modalRef.result
      .then((result) => {
        if (result) {
          this.profilePatient.isNationalityCardUploaded = true;
          // this.toastService.success("Nationality Card Image Added");
        }
      })
      .catch(() => { });
  }

  showNationalityCardImage(profilePatient: any) {
    const modalRef = this.modalService.open(ShowImageModalComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.showImageType = CardType.NATIONALITY_CARD;
    modalRef.componentInstance.patientId = profilePatient.id;
  }

  uploadInsuranceCardImage(profilePatient: any) {
    const modalRef = this.modalService.open(AddCardImageModalComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.patientId = profilePatient.id;
    modalRef.componentInstance.uploadType = CardType.INSURANCE_CARD;
    modalRef.result
      .then((result) => {
        if (result) {
          this.profilePatient.isInsuranceCardUploaded = true;
          // this.toastService.success("Insurance Card Image Added");
        }
      })
      .catch(() => { });
  }

  showInsuranceCardImage(profilePatient: any) {
    const modalRef = this.modalService.open(ShowImageModalComponent, { size: 'md', backdrop: 'static' });
    modalRef.componentInstance.showImageType = CardType.INSURANCE_CARD;
    modalRef.componentInstance.patientId = profilePatient.id;
  }

}
